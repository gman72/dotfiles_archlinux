#!/bin/sh

timedatectl set-ntp true
mkfs.ext4 /dev/sdb1
mount /dev/sdb1 /mnt
pacstrap /mnt base base-devel linux linux-firmware vim
genfstab -U /mnt >> /mnt/etc/fstab
arch-chroot /mnt
cat /etc/fstab

