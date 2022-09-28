#!/bin/bash
cd /home/gman72/
git clone https://aur.archlinux.org/pikaur.git
chown -r gman72:root pikaur/
cd pikaur
sudo -u gman72 makepkg -fsri --noconfirm
sudo -u gman72 pikaur -S ncspot spotify-tui teams genymotion networkmanager-dmenu-git openrazer-meta polychromatic universal-android-debloater ttf-dejavu-sans-code ttf-material-design-icons zscroll-git --noconfirm --needed
	
