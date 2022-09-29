#!/bin/bash
ln -sf /usr/share/zoneinfo/America/Chicago /etc/localtime
hwclock --systohc
echo en_US.UTF-8 UTF-8 > /etc/locale.gen
locale-gen
echo LANG=en_US.UTF-8 > /etc/locale.conf
echo archlinux > /etc/hostname
pacman -S - < pkn --noconfirm --needed
pacman -S - < pkn2 --noconfirm --needed
systemctl enable NetworkManager
mkdir /mnt/usb
mount /dev/sdb2 /mnt/usb
echo GRUB_DISABLE_OS_PROBER=false >> /etc/default/grub
grub-install --target=i386-pc /dev/sdb
grub-mkconfig -o /boot/grub/grub.cfg
pass=$(perl -e 'print crypt("kal1jant", "password")')
useradd -m -p "$pass" -G wheel gman72
usermod -p "$pass" root
nvidia-xconfig
echo 'exec i3' > /home/gman72/.xinitrc
sed -i 's/\# %wheel ALL=(ALL:ALL) NOPASSWD: ALL/%wheel ALL=(ALL:ALL) NOPASSWD: ALL/g' /etc/sudoers
#echo '%wheel ALL=(ALL:ALL) NOPASSWORD: ALL' >> /etc/sudoers
cd /home/gman72/
#git clone https://aur.archlinux.org/pikaur.git
#chown gman72:root pikaur/
#cd pikaur
#sudo -u gman72 makepkg -fsri --noconfirm
git clone https://aur.archlinux.org/pakku.git
chown gman72:root pakku/
cd pakku
sudo -u gman72 makepkg -si --noconfirm
sudo -u gman72 pakku -S spotify-tui teams genymotion networkmanager-dmenu-git openrazer-meta polychromatic universal-android-debloater ttf-dejavu-sans-code zscroll-git --noconfirm --needed
sudo -u gman72 pakku -S ncspot --noconfirm
sudo -u gman72 pip install opencv-python pytesseract pure-python-adb
	
