#!/bin/bash
echo en_US.UTF-8 UTF-8 > /etc/locale.gen
locale-gen
echo LANG=en_US.UTF-8 > /etc/locale.conf
echo archlinux > /etc/hostname
pacman -S - < pkn --noconfirm --needed
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
sed -i 's/\# %wheel ALL=(ALL:ALL) NOPASSWORD: ALL/%wheel ALL=(ALL:ALL) NOPASSWORD: ALL/g' /etc/sudoers
cd /home/gman72/
git clone https://aur.archlinux.org/pikaur.git
cd pikaur
sudo -u gman72 makepkg -fsri --noconfirm
sudo -u gman72 pikaur -S spotify-tui teams genymotion networkmanager-dmenu-git openrazer-meta polychromatic universal-android-deblotter ttf-dejavu-sans-code ttf-materal-design-icons --noconfirm
	
