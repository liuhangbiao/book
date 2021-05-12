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

### CURL参数详解

```
Usage: curl [options...] <url>
     --abstract-unix-socket <path> Connect via abstract Unix domain socket
     --anyauth       Pick any authentication method [选择任何身份验证方法]
 -a, --append        Append to target file when uploading
     --basic         Use HTTP Basic Authentication [使用HTTP基本身份验证]
     --cacert <CA certificate> CA certificate to verify peer against
     --capath <dir>  CA directory to verify peer against
 -E, --cert <certificate[:password]> Client certificate file and password
     --cert-status   Verify the status of the server certificate
     --cert-type <type> Certificate file type (DER/PEM/ENG)
     --ciphers <list of ciphers> SSL ciphers to use
     --compressed    Request compressed response
 -K, --config <file> Read config from a file
     --connect-timeout <seconds> Maximum time allowed for connection
     --connect-to <HOST1:PORT1:HOST2:PORT2> Connect to host
 -C, --continue-at <offset> Resumed transfer offset
 -b, --cookie <data> Send cookies from string/file
 -c, --cookie-jar <filename> Write cookies to <filename> after operation
     --create-dirs   Create necessary local directory hierarchy
     --crlf          Convert LF to CRLF in upload
     --crlfile <file> Get a CRL list in PEM format from the given file
 -d, --data <data>   HTTP POST data
     --data-ascii <data> HTTP POST ASCII data
     --data-binary <data> HTTP POST binary data
     --data-raw <data> HTTP POST data, '@' allowed
     --data-urlencode <data> HTTP POST data url encoded
     --delegation <LEVEL> GSS-API delegation permission
     --digest        Use HTTP Digest Authentication
 -q, --disable       Disable .curlrc
     --disable-eprt  Inhibit using EPRT or LPRT
     --disable-epsv  Inhibit using EPSV
     --dns-interface <interface> Interface to use for DNS requests
     --dns-ipv4-addr <address> IPv4 address to use for DNS requests
     --dns-ipv6-addr <address> IPv6 address to use for DNS requests
     --dns-servers <addresses> DNS server addrs to use
 -D, --dump-header <filename> Write the received headers to <filename>
     --egd-file <file> EGD socket path for random data
     --engine <name> Crypto engine to use
     --expect100-timeout <seconds> How long to wait for 100-continue
 -f, --fail          Fail silently (no output at all) on HTTP errors
     --fail-early    Fail on first transfer error, do not continue
     --false-start   Enable TLS False Start
 -F, --form <name=content> Specify HTTP multipart POST data
     --form-string <name=string> Specify HTTP multipart POST data
     --ftp-account <data> Account data string
     --ftp-alternative-to-user <command> String to replace USER [name]
     --ftp-create-dirs Create the remote dirs if not present
     --ftp-method <method> Control CWD usage
     --ftp-pasv      Use PASV/EPSV instead of PORT
 -P, --ftp-port <address> Use PORT instead of PASV
     --ftp-pret      Send PRET before PASV
     --ftp-skip-pasv-ip Skip the IP address for PASV
     --ftp-ssl-ccc   Send CCC after authenticating
     --ftp-ssl-ccc-mode <active/passive> Set CCC mode
     --ftp-ssl-control Require SSL/TLS for FTP login, clear for transfer
 -G, --get           Put the post data in the URL and use GET
 -g, --globoff       Disable URL sequences and ranges using {} and []
 -I, --head          Show document info only
 -H, --header <header/@file> Pass custom header(s) to server
 -h, --help          This help text
     --hostpubmd5 <md5> Acceptable MD5 hash of the host public key
 -0, --http1.0       Use HTTP 1.0
     --http1.1       Use HTTP 1.1
     --http2         Use HTTP 2
     --http2-prior-knowledge Use HTTP 2 without HTTP/1.1 Upgrade
     --ignore-content-length Ignore the size of the remote resource
 -i, --include       Include protocol response headers in the output
 -k, --insecure      Allow insecure server connections when using SSL
     --interface <name> Use network INTERFACE (or address)
 -4, --ipv4          Resolve names to IPv4 addresses
 -6, --ipv6          Resolve names to IPv6 addresses
 -j, --junk-session-cookies Ignore session cookies read from file
     --keepalive-time <seconds> Interval time for keepalive probes
     --key <key>     Private key file name
     --key-type <type> Private key file type (DER/PEM/ENG)
     --krb <level>   Enable Kerberos with security <level>
     --libcurl <file> Dump libcurl equivalent code of this command line
     --limit-rate <speed> Limit transfer speed to RATE
 -l, --list-only     List only mode
     --local-port <num/range> Force use of RANGE for local port numbers
 -L, --location      Follow redirects
     --location-trusted Like --location, and send auth to other hosts
     --login-options <options> Server login options
     --mail-auth <address> Originator address of the original email
     --mail-from <address> Mail from this address
     --mail-rcpt <address> Mail from this address
 -M, --manual        Display the full manual
     --max-filesize <bytes> Maximum file size to download
     --max-redirs <num> Maximum number of redirects allowed
 -m, --max-time <time> Maximum time allowed for the transfer
     --metalink      Process given URLs as metalink XML file
     --negotiate     Use HTTP Negotiate (SPNEGO) authentication
 -n, --netrc         Must read .netrc for user name and password
     --netrc-file <filename> Specify FILE for netrc
     --netrc-optional Use either .netrc or URL
 -:, --next          Make next URL use its separate set of options
     --no-alpn       Disable the ALPN TLS extension
 -N, --no-buffer     Disable buffering of the output stream
     --no-keepalive  Disable TCP keepalive on the connection
     --no-npn        Disable the NPN TLS extension
     --no-sessionid  Disable SSL session-ID reusing
     --noproxy <no-proxy-list> List of hosts which do not use proxy
     --ntlm          Use HTTP NTLM authentication
     --ntlm-wb       Use HTTP NTLM authentication with winbind
     --oauth2-bearer <token> OAuth 2 Bearer Token
 -o, --output <file> Write to file instead of stdout
     --pass <phrase> Pass phrase for the private key
     --path-as-is    Do not squash .. sequences in URL path
     --pinnedpubkey <hashes> FILE/HASHES Public key to verify peer against
     --post301       Do not switch to GET after following a 301
     --post302       Do not switch to GET after following a 302
     --post303       Do not switch to GET after following a 303
     --preproxy [protocol://]host[:port] Use this proxy first
 -#, --progress-bar  Display transfer progress as a bar
     --proto <protocols> Enable/disable PROTOCOLS
     --proto-default <protocol> Use PROTOCOL for any URL missing a scheme
     --proto-redir <protocols> Enable/disable PROTOCOLS on redirect
 -x, --proxy [protocol://]host[:port] Use this proxy
     --proxy-anyauth Pick any proxy authentication method
     --proxy-basic   Use Basic authentication on the proxy
     --proxy-cacert <file> CA certificate to verify peer against for proxy
     --proxy-capath <dir> CA directory to verify peer against for proxy
     --proxy-cert <cert[:passwd]> Set client certificate for proxy
     --proxy-cert-type <type> Client certificate type for HTTS proxy
     --proxy-ciphers <list> SSL ciphers to use for proxy
     --proxy-crlfile <file> Set a CRL list for proxy
     --proxy-digest  Use Digest authentication on the proxy
     --proxy-header <header/@file> Pass custom header(s) to proxy
     --proxy-insecure Do HTTPS proxy connections without verifying the proxy
     --proxy-key <key> Private key for HTTPS proxy
     --proxy-key-type <type> Private key file type for proxy
     --proxy-negotiate Use HTTP Negotiate (SPNEGO) authentication on the proxy
     --proxy-ntlm    Use NTLM authentication on the proxy
     --proxy-pass <phrase> Pass phrase for the private key for HTTPS proxy
     --proxy-service-name <name> SPNEGO proxy service name
     --proxy-ssl-allow-beast Allow security flaw for interop for HTTPS proxy
     --proxy-tlsauthtype <type> TLS authentication type for HTTPS proxy
     --proxy-tlspassword <string> TLS password for HTTPS proxy
     --proxy-tlsuser <name> TLS username for HTTPS proxy
     --proxy-tlsv1   Use TLSv1 for HTTPS proxy
 -U, --proxy-user <user:password> Proxy user and password
     --proxy1.0 <host[:port]> Use HTTP/1.0 proxy on given port
 -p, --proxytunnel   Operate through a HTTP proxy tunnel (using CONNECT)
     --pubkey <key>  SSH Public key file name
 -Q, --quote         Send command(s) to server before transfer
     --random-file <file> File for reading random data from
 -r, --range <range> Retrieve only the bytes within RANGE
     --raw           Do HTTP "raw"; no transfer decoding
 -e, --referer <URL> Referrer URL
 -J, --remote-header-name Use the header-provided filename
 -O, --remote-name   Write output to a file named as the remote file
     --remote-name-all Use the remote file name for all URLs
 -R, --remote-time   Set the remote file's time on the local output
 -X, --request <command> Specify request command to use
     --request-target Specify the target for this request
     --resolve <host:port:address> Resolve the host+port to this address
     --retry <num>   Retry request if transient problems occur
     --retry-connrefused Retry on connection refused (use with --retry)
     --retry-delay <seconds> Wait time between retries
     --retry-max-time <seconds> Retry only within this period
     --sasl-ir       Enable initial response in SASL authentication
     --service-name <name> SPNEGO service name
 -S, --show-error    Show error even when -s is used
 -s, --silent        Silent mode
     --socks4 <host[:port]> SOCKS4 proxy on given host + port
     --socks4a <host[:port]> SOCKS4a proxy on given host + port
     --socks5 <host[:port]> SOCKS5 proxy on given host + port
     --socks5-basic  Enable username/password auth for SOCKS5 proxies
     --socks5-gssapi Enable GSS-API auth for SOCKS5 proxies
     --socks5-gssapi-nec Compatibility with NEC SOCKS5 server
     --socks5-gssapi-service <name> SOCKS5 proxy service name for GSS-API
     --socks5-hostname <host[:port]> SOCKS5 proxy, pass host name to proxy
 -Y, --speed-limit <speed> Stop transfers slower than this
 -y, --speed-time <seconds> Trigger 'speed-limit' abort after this time
     --ssl           Try SSL/TLS
     --ssl-allow-beast Allow security flaw to improve interop
     --ssl-no-revoke Disable cert revocation checks (WinSSL)
     --ssl-reqd      Require SSL/TLS
 -2, --sslv2         Use SSLv2
 -3, --sslv3         Use SSLv3
     --stderr        Where to redirect stderr
     --suppress-connect-headers Suppress proxy CONNECT response headers
     --tcp-fastopen  Use TCP Fast Open
     --tcp-nodelay   Use the TCP_NODELAY option
 -t, --telnet-option <opt=val> Set telnet option
     --tftp-blksize <value> Set TFTP BLKSIZE option
     --tftp-no-options Do not send any TFTP options
 -z, --time-cond <time> Transfer based on a time condition
     --tls-max <VERSION> Use TLSv1.0 or greater
     --tlsauthtype <type> TLS authentication type
     --tlspassword   TLS password
     --tlsuser <name> TLS user name
 -1, --tlsv1         Use TLSv1.0 or greater
     --tlsv1.0       Use TLSv1.0
     --tlsv1.1       Use TLSv1.1
     --tlsv1.2       Use TLSv1.2
     --tlsv1.3       Use TLSv1.3
     --tr-encoding   Request compressed transfer encoding
     --trace <file>  Write a debug trace to FILE
     --trace-ascii <file> Like --trace, but without hex output
     --trace-time    Add time stamps to trace/verbose output
     --unix-socket <path> Connect through this Unix domain socket
 -T, --upload-file <file> Transfer local FILE to destination
     --url <url>     URL to work with
 -B, --use-ascii     Use ASCII/text transfer
 -u, --user <user:password> Server user and password
 -A, --user-agent <name> Send User-Agent <name> to server
 -v, --verbose       Make the operation more talkative
 -V, --version       Show version number and quit
 -w, --write-out <format> Use output FORMAT after completion
     --xattr         Store metadata in extended file attributes
```


### SSH参数详解
```
NAME
     ssh — OpenSSH SSH client (remote login program)

SYNOPSIS
     ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-b bind_address] [-c cipher_spec] [-D [bind_address:]port] [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11] [-i identity_file] [-J [user@]host[:port]] [-L address] [-l login_name]
         [-m mac_spec] [-O ctl_cmd] [-o option] [-p port] [-Q query_option] [-R address] [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]] [user@]hostname [command]

DESCRIPTION
     ssh (SSH client) is a program for logging into a remote machine and for executing commands on a remote machine.  It is intended to provide secure encrypted communications between two untrusted hosts over an insecure network.
     X11 connections, arbitrary TCP ports and UNIX-domain sockets can also be forwarded over the secure channel.

     ssh connects and logs into the specified hostname (with optional user name).  The user must prove his/her identity to the remote machine using one of several methods (see below).

     If command is specified, it is executed on the remote host instead of a login shell.

     The options are as follows:

     -4      Forces ssh to use IPv4 addresses only.

     -6      Forces ssh to use IPv6 addresses only.

     -A      Enables forwarding of the authentication agent connection.  This can also be specified on a per-host basis in a configuration file.

             Agent forwarding should be enabled with caution.  Users with the ability to bypass file permissions on the remote host (for the agent's UNIX-domain socket) can access the local agent through the forwarded connection.
             An attacker cannot obtain key material from the agent, however they can perform operations on the keys that enable them to authenticate using the identities loaded into the agent.

     -a      Disables forwarding of the authentication agent connection.

     -b bind_address
             Use bind_address on the local machine as the source address of the connection.  Only useful on systems with more than one address.

     -C      Requests compression of all data (including stdin, stdout, stderr, and data for forwarded X11, TCP and UNIX-domain connections).  The compression algorithm is the same used by gzip(1).  Compression is desirable on
             modem lines and other slow connections, but will only slow down things on fast networks.  The default value can be set on a host-by-host basis in the configuration files; see the Compression option.

     -c cipher_spec
             Selects the cipher specification for encrypting the session.  cipher_spec is a comma-separated list of ciphers listed in order of preference.  See the Ciphers keyword in ssh_config(5) for more information.

     -D [bind_address:]port
             Specifies a local “dynamic” application-level port forwarding.  This works by allocating a socket to listen to port on the local side, optionally bound to the specified bind_address.  Whenever a connection is made to
             this port, the connection is forwarded over the secure channel, and the application protocol is then used to determine where to connect to from the remote machine.  Currently the SOCKS4 and SOCKS5 protocols are sup‐
             ported, and ssh will act as a SOCKS server.  Only root can forward privileged ports.  Dynamic port forwardings can also be specified in the configuration file.

             IPv6 addresses can be specified by enclosing the address in square brackets.  Only the superuser can forward privileged ports.  By default, the local port is bound in accordance with the GatewayPorts setting.  However,
             an explicit bind_address may be used to bind the connection to a specific address.  The bind_address of “localhost” indicates that the listening port be bound for local use only, while an empty address or ‘*’ indicates
             that the port should be available from all interfaces.

     -E log_file
             Append debug logs to log_file instead of standard error.

     -e escape_char
             Sets the escape character for sessions with a pty (default: ‘~’).  The escape character is only recognized at the beginning of a line.  The escape character followed by a dot (‘.’) closes the connection; followed by
             control-Z suspends the connection; and followed by itself sends the escape character once.  Setting the character to “none” disables any escapes and makes the session fully transparent.

     -F configfile
             Specifies an alternative per-user configuration file.  If a configuration file is given on the command line, the system-wide configuration file (/etc/ssh/ssh_config) will be ignored.  The default for the per-user con‐
             figuration file is ~/.ssh/config.

     -f      Requests ssh to go to background just before command execution.  This is useful if ssh is going to ask for passwords or passphrases, but the user wants it in the background.  This implies -n.  The recommended way to
             start X11 programs at a remote site is with something like ssh -f host xterm.
```


### git参数详解

```
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.

```