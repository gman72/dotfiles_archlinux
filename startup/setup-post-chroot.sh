#! /bin/sh
echo en_US.UTF-8 UTF-8 > /etc/locale.gen
locale-gen
echo LANG=en_US.UTF-8 > /etc/locale.conf
echo archlinux > /etc/hostname
pacman -S networkmanager os-prober grub --noconfirm
systemctl enable NetworkManager
mkdir /mnt/usb
mount /dev/sda2 /mnt/usb
echo GRUB_DISABLE_OS_PROBER=false >> /etc/default/grub
grub-install --target=i386-pc /dev/sdb
grub-mkconfig -o /boot/grub/grub.cfg
exit
umount -R /mnt
reboot
