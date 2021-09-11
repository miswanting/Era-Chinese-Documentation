# 常量与变量

> 翻译自原文档：https://osdn.net/projects/emuera/wiki/exvar

## 常量的表示

Emuera 使用的常量符号与 Kirikiri 中可以使用的符号相同，但八进制的符号除外。

例如，以下几行都有相同的含义：

```
X = 32
X = 0b100000
X = 0x20
X = 1p5
```

从上到下的顺序是：普通十进制符号、二进制、十六进制、1 x 2到5次方。

当你想获得或设置每一个比特时，像1p5这样的符号在与位操作符的结合中很有用。

例如，如果A的底部第0位或第3位成立，下面的条件语句将为真。

```
IF (A & 1p0)||(A & 1p3)
```

你也可以用e代替p来表示n x 10的m次方。

例如，13e3等于13000。

上述符号仅用于常量，不能用于表达式。

诸如以下的记号将导致一个错误：

```
X = 13e(A + 1)
```

由于与 Eramaker 的兼容性问题，八进制符号没有被采用。

数字` 012 `将被解释为`12`，而不是`10`。

## 指定变量大小

在 Emuera 中，你可以通过在`CSV/`文件夹中放置一个名为`VariableSize.csv`的文件来指定一个现有变量的元素数。

如果你为元素数指定-1，你可以禁止在ERB中使用该变量。

如果你试图在ERB中赋值或引用一个被禁止的变量，将会发生错误。如果系统需要一个被禁止的变量，赋值过程将被忽略，其值将始终被视为-1。

(这是当`MONEY`或`NEXTCOM`被禁用时出现的情况）。

## 本地变量

### LOCAL & LOCALS

::: warning 该方法已弃用

请考虑使用`#DIM`和`#DIMS`代替。

:::

欲了解更多信息，请参见[用户定义的变量]()。

`LOCAL`变量是局部变量。

`LOCAL`是一个整数，`LOCALS`是一个字符串

`LOCAL`的基本规模为1000，`LOCALS`为100。

你也可以通过`#LOCALSIZE <要设置的元素数>`和`#LOCALSSIZE <要设置的元素数>`为每个函数分别设置元素数。

允许你单独改变每个函数的元素数量。 (然而，你只能将其设置为一个大于0的整数）。

这是不被保存的。

```
@EVENTFIRST
  LOCAL:10 = 123
  CALL FUNC001
  PRINTV LOCAL:10
  WAIT
@FUNC001
  LOCAL:10 = 567
  RETURN
```

在上述代码中，`PRINTV`的结果是`123`。

`FUNC001`中的`LOCAL:10`被改变，但`EVENTFIRST`中的`LOCAL`没有被改变。

与许多语言中的局部变量不同，`LOCAL`在调用函数时不被初始化。

在内部，我们创建了一个名为`LOCAL@函数名`的变量。

因此，如果有多个同名的函数，例如事件函数，它们是共享的。 另外，如果函数被递归调用，它将使用同一个变量。

可以调用其他函数的变量，如`LOCAL@EVENTFIRST:10 = 567`，但不建议这样做（这是一个调试功能）。

(这只是为了调试的目的。)如果你从另一个函数中调用一个变量，而你所调用的函数的名称包含一个运算符，将导致一个错误。

### ARG & ARGS

本地变量。

`ARG`是一个整数，`ARGS`是一个字符串。

`ARG`的大小基本上是1000，`ARGS`是100，可以在`VariableSize.csv`中改变。

此外，该函数会自动分配足够的元素，以便毫无问题地使用函数参数中定义的数量。 (它永远不会小于`VariableSize.csv`中指定的数字）。)

```
@FUNC002, ARG:0, ARG:1, ARG,1100
  LOCAL = ARG:0 * ARG:1 / 100
  RETURN LOCAL
```

在这种情况下，`ARG`中的元素数原本是1000，但在`@FUNC002`中，`ARG`中的元素数是1101，从0到1100。

它的目的是用于指定函数中的参数，对于其他用途来说，可读性可能较差。

### (用户定义的私有变量)

在特定函数中使用`#DIM`或`#DIMS`定义的变量是私有变量，可以用与局部变量相同的方式处理。

更多信息见用户定义的变量。

## 保存数据之间共享的变量

### GLOBAL & GLOBALS

这些是可以在不同保存数据之间共享的变量。

`GLOBAL`是一个整数，`GLOBALS`是一个字符串

`GLOBAL`的基本尺寸是1000，`GLOBALS`是100，可以在`VariableSize.csv`中改变。

它们不与其他数据一起保存和加载。

要保存一个全局变量，使用`SAVEGLOBAL`指令。

当你做`SAVEGLOBAL`时，`GLOBAL`和`GLOBALS`被保存在`Global.sav`中。

如果`Global.sav`在编写时已经存在，它将被覆盖。

`LOADGLOBAL`指令允许你从`Global.sav`加载`GLOBAL`和`GLOBAL`。

`LOADGLOBAL`被推荐与`@EVENTFIRST`和`@EVENTLOAD`一起使用。

可以通过`GLOBAL`和`GLOBAL`在不同的保存之间共享数据。

### (用户定义的全局变量)

在ERH中使用`#DIM GLOBAL`或`#DIMS GLOBAL`定义的变量是全局变量。

另外，通过使用`#DIM SAVEDATA GLOBAL`，该变量成为一个保存的全局变量。

详情请参考[头文件（ERH）]()。

## 角色变量

### NICKNAME & MASTERNAME

这是一个保存的字符串变量，类似于`NAME`和`CALLNAME`。

在`CharaXX.csv`中，你可以指定为`NICKNAME`、`MASTERNAME`、`绰号`或`主人的名字`。

### CSTR

一个要保存的字符串数组变量。

它是`CFLAG`的一个字符串版本。

在`CharaXX.csv`中，它被指定为`CSTR`。

### CUP & CDOWN & DOWNBASE & TCVAR

这些是数字数组变量。

它们旨在分别作为`UP`、`DOWN`、`LOSEBASE`和`TFLAG`的字符变量版本使用。

因此，它们具有与这些变量相同的初始化时间和保存可用性。

然而，对于`CUP`和`CDOWN`，使用`CUPCHECK`指令而不是`UPCHECK`指令。

### CDFLAG

数值角色的三维阵列变量。

```
CDFLAG:MASTER:0:2
```

第一个参数是角色的注册号，就像在传统的角色变量中一样，但第二个和第三个参数是必需的。

### (用户定义的角色变量)

在ERH中使用`#DIM CHARADATA`或`#DIMS CHARADATA`定义的变量是字符变量，可以自由处理，就像`CFLAG`。
详见[头文件（ERH）]()。

## csv相关

### csv变量

这个变量用于参考每个csv中定义的值。

使用方法类似于例如`TALENTNAME`和`Talent.csv`之间的关系。

所有这些都是一维数组变量，不能被分配，也不能被保存。

如果它没有在csv中定义，它将返回0或空字符串。

|   变量名    |    文件     |  类型  | 长度  |
| :---------: | :---------: | :----: | :---: |
|  ITEMPRICE  |  Item.csv   |  整数  | 1000  |
|  TRAINNAME  |  Train.csv  | 字符串 | 1000  |
|  BASENAME   |  Base.csv   | 字符串 |  100  |
|  EQUIPNAME  |  equip.csv  | 字符串 |  100  |
| TEQUIPNAME  | tequip.csv  | 字符串 |  100  |
|  STAINNAME  |  stain.csv  | 字符串 | 1000  |
|   EXNAME    |   ex.csv    | 字符串 |  100  |
| SOURCENAME  | source.csv  | 字符串 |  100  |
|  FLAGNAME   |  flag.csv   | 字符串 | 10000 |
|  TFLAGNAME  |  tflag.csv  | 字符串 | 1000  |
|  CFLAGNAME  |  cflag.csv  | 字符串 | 1000  |
|  TCVARNAME  |  tcvar.csv  | 字符串 |  100  |
|   STRNAME   | strname.csv | 字符串 | 20000 |
|  TSTRNAME   |  tstr.csv   | 字符串 |  100  |
|  CSTRNAME   |  cstr.csv   | 字符串 |  100  |
| SAVESTRNAME | savestr.csv | 字符串 |  100  |
| CDFLAGNAME1 | cdflag1.csv | 字符串 |   1   |
| CDFLAGNAME2 | cdflag2.csv | 字符串 |   1   |
| GLOBALNAME  | global.csv  | 字符串 |  100  |
| GLOBALSNAME | globals.csv | 字符串 |  100  |

请不要混淆`str.csv`和`cstr.csv`等的作用。

`str.csv`是决定分配给变量`STR`的值的文件，而`cstr.csv`是决定`CSTRNAME`的文件。

决定`STRNAME`的文件是`strname.csv`，所以要注意如何使用`str.csv`和`strname.csv`。

### GameBase.csv 変数

参考`GameBase.csv`中定义的数值的变量。

所有的变量都是非数组，不可分配和不可保存的。

|        变量名         |   关键词   |  类型  |
| :-------------------: | :--------: | :----: |
|    GAMEBASE_AUTHOR    |    作者    | 字符串 |
|     GAMEBASE_INFO     |  追加信息  | 字符串 |
|     GAMEBASE_YEAR     |  制作年份  | 字符串 |
|    GAMEBASE_TITLE     |    标题    | 字符串 |
|   GAMEBASE_GAMECODE   |  游戏代码  |  整数  |
|   GAMEBASE_VERSION    |    版本    |  整数  |
| GAMEBASE_ALLOWVERSION |  兼容版本  |  整数  |
| GAMEBASE_DEFAULTCHARA |  默认人物  |  整数  |
|    GAMEBASE_NOITEM    | 无物品模式 |  整数  |

### WINDOW_TITLE

这是显示在 Emuera 窗口标题栏的字符串。

它是一个非数组字符串变量。 初始值是`GameBase.csv`的`窗口标题`字段中设置的值。

如果没有设置`窗口标题`，它将由`标题`和`版本`生成。

如果`标题`也没有设置，它将是 Emuera。

### 与csv有关的其他变量

#### MONEYLABEL
