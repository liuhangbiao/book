## Linux操作指南

### 命令行

```
mkdir 创建目录
cd  切换目录
mv 移动目录
rm 删除目录/文件
ls 查看目录
touch 创建文件
cp 拷贝
cat 查看内容
grep 过滤
echo 输出
```


### 基础操作

1. 目录操作

```
# 创建目录
mkdir $HOME/testFolder

# 切换目录
cd $HOME/testFolder
cd ../  [使用 cd ../ 命令切换到上一级目录]

# 移动目录
mv $HOME/testFolder /var/tmp

# 删除目录
rm -rf /var/tmp

# 查看目录下的文件(所有文件和文件夹)
ls /etc
```

2. 文件操作

```
# 创建文件
touch ~/testFile

# 复制文件
cp ~/testFile ~/testNewFile

# 删除文件
rm ~/testFile  [使用 rm 命令删除文件, 输入 y 后回车确认删除]

# 查看文件内容
cat ~/.bash_history

# 指定内容（字符串）的文件
find . | xargs grep string #查找当前目录下文件内容包含字符串string的文件
find . -name '*string*' #查找当前目录下文件名包含字符串string的文件
find . ! -name '*string*' #查找文件名中不包含字符串string的文件，可以使用!（取非，也就是取反）

find /mnt/c/workspace  -path "./node_modules" -prune -o  -name "*.js"  | xargs grep "ali-oss"
```

3. 过滤, 管道与重定向

```
# 过滤
grep 'root' /etc/passwd  [过滤出 /etc/passwd 文件中包含 root 的记录]
grep -r 'linux' /var/log/ [递归地过滤出 /var/log/ 目录中包含 linux 的记录]

# 管道
cat /etc/passwd | grep 'root'  [过滤出 /etc/passwd 文件中包含 root 的记录]
ls /etc | grep 'ssh'  [过滤出 /etc 目录中名字包含 ssh 的目录(不包括子目录)]

# 重定向
echo 'Hello World' > ~/test.txt   [可以使用 > 或 < 将命令的输出重定向到一个文件中]
```

4. 运维常用命令

```
# ping 命令
ping -c 4 cloud.tencent.com 
[对 cloud.tencent.com 发送 4 个 ping 包, 检查与其是否联通]

# netstat 命令 (显示各种网络相关信息，如网络连接, 路由表, 接口状态等等)
netstat -lt [列出所有处于监听状态的tcp端口]
netstat -tulpn [查看所有的端口信息, 包括 PID 和进程名称]

# ps 命令
ps aux | grep 'ssh'  [过滤得到当前系统中的 ssh 进程信息]
```

### 其他常用命令

```
# linux CPU大小
cat /proc/cpuinfo |grep "model name" && cat /proc/cpuinfo |grep "physical id"

# 内存大小
cat /proc/meminfo |grep MemTotal

# 查看内核/操作系统/CPU信息的linux系统信息命令
uname -a

# 查看操作系统版本，是数字1不是字母L
head -n 1 /etc/issue 

# 查看CPU信息的linux系统信息命令
cat /proc/cpuinfo 

# 查看计算机名的linux系统信息命令
hostname 

# 硬盘大小
fdisk -l |grep Disk

# 列出所有PCI设备
lspci -tv 

# 列出所有USB设备的linux系统信息命令
lsusb -tv 

# 列出加载的内核模块
lsmod 

# 查看环境变量资源
env 

# 查看内存使用量和交换区使用量
free -m 

# 查看各分区使用情况
df -h 

# 查看指定目录的大小
du -sh 

# 查看内存总量
grep MemTotal /proc/meminfo 

# 查看空闲内存量
grep MemFree /proc/meminfo 

# 查看系统运行时间、用户数、负载
uptime 

# 查看系统负载磁盘和分区
cat /proc/loadavg 

# 查看挂接的分区状态
mount | column -t 

# 查看所有分区
fdisk -l 

# 查看所有交换分区
swapon -s 

# 查看磁盘参数(仅适用于IDE设备)
hdparm -i /dev/hda 

# 查看启动时IDE设备检测状况网络
dmesg | grep IDE 

# 查看所有网络接口的属性
ifconfig 

# 查看防火墙设置
iptables -L 

# 查看路由表
route -n 

# 查看所有监听端口
netstat -lntp 

# 查看所有已经建立的连接
netstat -antp 

# 查看网络统计信息进程
netstat -s 

# 查看所有进程
ps -ef 

# 实时显示进程状态用户
top 

# 查看活动用户
w 

# 查看指定用户信息
id 

# 查看用户登录日志
last 

# 查看系统所有用户
cut -d: -f1 /etc/passwd 

# 查看系统所有组
cut -d: -f1 /etc/group 

# 查看当前用户的计划任务服务
crontab -l 

# 列出所有系统服务
chkconfig –list 

# 列出所有启动的系统服务程序
chkconfig –list | grep on 

# 查看所有安装的软件包
rpm -qa 

# 查看CPU相关参数的linux系统命令
cat /proc/cpuinfo 

# 查看linux硬盘和分区信息的系统信息命令
cat /proc/partitions 

# 查看linux系统内存信息的linux系统命令
cat /proc/meminfo 

# 查看版本，类似uname -r
cat /proc/version 

# 查看设备io端口
cat /proc/ioports 

# 查看中断
cat /proc/interrupts 

# 查看pci设备的信息
cat /proc/pci 

# 查看所有swap分区的信息
cat /proc/swaps 
```