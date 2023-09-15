if status is-interactive
    # Commands to run in interactive sessions can go here
end

# Start X at login
if status is-login
    if test -z "$DISPLAY" -a "$XDG_VTNR" = 1
        exec startx -- -keeptty
    end
end
set -x PATH $PATH $HOME/flutter/flutter/bin
set -x PATH $PATH $HOME/flutter/flutter/.pub-cache/bin
set -x ANDROID_SDK_ROOT /opt/android-sdk
set -x PATH $PATH $ANDROID_SDK_ROOT/tools/bin $ANDROID_SDK_ROOT/platform-tools/
set -x JAVA_HOME /usr/lib/jvm/default
set -xg CHROME_EXECUTABLE /usr/bin/google-chrome-stable


