### Alpine Linux操作指南

Alpine Linux是一个面向安全应用的轻量级Linux发行版。它采用了musl libc和busybox以减小系统的体积和运行时资源消耗，同时还提供了自己的包管理工具apk。

Alpine Linux的内核都打了grsecurity/PaX补丁，并且所有的程序都编译为Position Independent Executables (PIE) 以增强系统的安全性。

#### Alpine Linux的优势和问题

* 优势

> Alpine Linux的Docker镜像特点是轻巧（大小只有5M）且有完整的包管理工具(APK)。

> Docker官方镜像可能会用Alpine Linux替换Ubuntu。

* 问题

> Alpine Linux使用了musl，可能和其他Linux发行版使用的glibc实现会有些不同。


#### Alpine Linux 包管理

* apk包管理命令

* Alpine使用apk进行包管理，通过apk –help命令查看完整的包管理命令，下面列举常用命令：

> update:从远程镜像源中更新本地镜像源索引

> update命令会从各个镜像源列表下载APKINDEX.tar.gz并存储到本地缓存，一般在/var/cache/apk/(Alpine在该目录下)、 /var/lib/apk/ 、/etc/apk/cache/下。

```
$ apt-update
```

> add命令从仓库中安装最新软件包，并自动安装必须的依赖包,也可以从第三方仓库添加软件包。
> add:安装PACKAGES并自动解决依赖关系

```
$ apk add openssh openntp vim
$ apk add --no-cache mysql-client
$ apk add docker --update-cache --repository http://mirrors.ustc.edu.cn/alpine/v3.4/main/ --allow-untrusted
```

安装指定版本软件包

```
$ apk add asterisk=1.6.0.21-r0
$ apk add 'asterisk<1.6.1'
$ apk add 'asterisk>1.6.1
```

> del:卸载并删除PACKAGES

```
$apk del openssh openntp vim
```

> upgrade命令升级系统已安装的所以软件包（一般包括内核），当然也可指定仅升级部分软件包（通过-u或–upgrade选择指定）。upgrade:升级当前已安装的软件包

```
$ apk update #更新最新本地镜像源
$ apk upgrade #升级软件
$ apk add --upgrade busybox #指定升级部分软件包
```

> search命令搜索可用软件包，-v参数输出描述内容，支出通配符，-d或–description参数指定通过软件包描述查询。search:搜索软件包

```
$ apk search #查找所以可用软件包
$ apk search -v #查找所以可用软件包及其描述内容
$ apk search -v 'acf*' #通过软件包名称查找软件包
$ apk search -v -d 'docker' #通过描述文件查找特定的软件包
```

> info命令用于显示软件包的信息。info:列出PACKAGES或镜像源的详细信息

```
$ apk info #列出所有已安装的软件包
$ apk info -a zlib #显示完整的软件包信息
$ apk info --who-owns /sbin/lbu #显示指定文件属于的包
```

#### 官方镜像列表：http://rsync.alpinelinux.org/alpine/MIRRORS.txt镜像源配置

> MIRRORS.txt中是当前Alpine官方提供的镜像源（Alpine安装的时候系统自动选择最佳镜像源）

* 国内镜像源

```
清华TUNA镜像源：https://mirror.tuna.tsinghua.edu.cn/alpine/
中科大镜像源：http://mirrors.ustc.edu.cn/alpine/
阿里云镜像源：http://mirrors.aliyun.com/alpine/
```

* 如何配置软件源

> 以中科大源为例：在/etc/apk/repositories文件中加入对应源地址就行了，一行一个地址。

```
$ vi /etc/apk/repositories
# /media/cdrom/apks
http://mirrors.ustc.edu.cn/alpine/v3.5/main
http://mirrors.ustc.edu.cn/alpine/v3.5/community
```

#### Alpine Linux使用的是Gentoo一样的OpenRCinit系统.Alpine Linux init系统

> 以下命令可用于管理init系统

* rc-update

> rc-update主要用于不同运行级增加或者删除服务。

* rc-update语法格式
```
Usage: rc-update [options] add <service> [<runlevel>...]
or: rc-update [options] del <service> [<runlevel>...]
or: rc-update [options] [show [<runlevel>...]]
 
Options: [ asuChqVv ]
-a, --all Process all runlevels
-s, --stack Stack a runlevel instead of a service
-u, --update Force an update of the dependency tree
-h, --help Display this help output
-C, --nocolor Disable color output
-V, --version Display software version
-v, --verbose Run verbosely
-q, --quiet Run quietly (repeat to suppress errors)
```

* 使用实例
```
$ rc-update add docker boot #增加一个服务
$ rc-update del docker boot #删除一个服务
```

* rc-status

> rc-status 主要用于运行级的状态管理。

* rc-status语法格式
```
Usage: rc-status [options] <runlevel>...
or: rc-status [options] [-a | -c | -l | -r | -s | -u]
 
Options: [ aclrsuChqVv ]
-a, --all Show services from all run levels
-c, --crashed Show crashed services
-l, --list Show list of run levels
-r, --runlevel Show the name of the current runlevel
-s, --servicelist Show service list
-u, --unused Show services not assigned to any runlevel
-h, --help Display this help output
-C, --nocolor Disable color output
-V, --version Display software version
-v, --verbose Run verbosely
-q, --quiet Run quietly (repeat to suppress errors)
```

* 使用实例
```
$ rc-status #检查默认运行级别的状态
$ rc-status -a #检查所有运行级别的状态
```

* rc-service

> rc-service主用于管理服务的状态

* rc-service语法格式
```
Usage: rc-service [options] [-i] <service> <cmd>...
or: rc-service [options] -e <service>
or: rc-service [options] -l
or: rc-service [options] -r <service>
 
Options: [ e:ilr:INChqVv ]
-e, --exists <arg> tests if the service exists or not
-i, --ifexists if the service exists then run the command
-I, --ifinactive if the service is inactive then run the command
-N, --ifnotstarted if the service is not started then run the command
-l, --list list all available services
-r, --resolve <arg> resolve the service name to an init script
-h, --help Display this help output
-C, --nocolor Disable color output
-V, --version Display software version
-v, --verbose Run verbosely
-q, --quiet Run quietly (repeat to suppress errors)
```

* 使用实例
```
$ rc-service sshd start #启动一个服务。
$ rc-service sshd stop #停止一个服务。
$ rc-service sshd restart #重启一个服务。
```

* openrc

> openrc主要用于管理不同的运行级。

* openrc语法格式
```
Usage: openrc [options] [<runlevel>]
 
Options: [ a:no:s:SChqVv ]
-n, --no-stop do not stop any services
-o, --override <arg> override the next runlevel to change into
when leaving single user or boot runlevels
-s, --service <arg> runs the service specified with the rest
of the arguments
-S, --sys output the RC system type, if any
-h, --help Display this help output
-C, --nocolor Disable color output
-V, --version Display software version
-v, --verbose Run verbosely
-q, --quiet Run quietly (repeat to suppress errors)
```

* defaultAlpine Linux可用的运行级

```
sysinit
boot
single
reboot
shutdown
```

* 使用实例
```
$ openrc single #更改为single运行级 
```

* 其它指令
```
$ reboot #重启系统，类似于shutdown -r now。
$ halt #关机，类似于shutdown -h now。
$ poweroff #关机
```