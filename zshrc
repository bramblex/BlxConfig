# Created by newuser for 5.0.2
#alias tmux='tmux -2'

#bindkey -e
#set -o vi

# source profile file

if [ $UID != 0 ]
then
    test -f ${HOME}/.zsh/zshrc && source ${HOME}/.zsh/zshrc
    test -z "$TMUX" && ( TERM=screen-256color-bce tmux attach || tmux -2 ) && exit
    clear
    archey -c

    LC_ALL=en_US.UTF-8
    LANG=en_US.UTF-8

    export PATH="${PATH}:${HOME}/Local/bin/"
    export PATH="${PATH}:${HOME}/Local/usr/bin"

    alias info='info --vi-keys'
    bindkey -v

    alias sl="ls"
    alias e="ranger"

    export LESSOPEN="| /usr/local/bin/src-hilite-lesspipe.sh %s"
    export LESS=' -R '

    export VIMPYSERVER_HOME="~/Local/usr/VimPyServer/"

    #alias brew='http_proxy="127.0.0.1:8119" https_proxy="127.0.0.1:8119" brew'
fi
