---
title: Linux
layout: wiki/links
styles:
  - /static/css/components/wiki/links.css
  - /static/css/prism.css
linkHeadings: h3
links:
  - title: A more helpful makefile
    link: https://jakemccrary.com/blog/2018/12/27/a-more-helpful-makefile/
    note: Make your makefiles more useful with this helpful target.
    date: 2018-12-27
---

# Linux

## Resize Btrfs filesystem inside LUKS encrypted LVM volume

1. Resize Btrfs volume:

   ```bash
   btrfs filesystem resize /mnt -60G
   ```

2. Force check and resive logical volume:

   ```bash
   e2fsck -f /dev/vg/
   lvreduce --resizefs -L -60G /dev/vg/lv
   ```

3. Resize physical volume:

   ```bash
   pvresize --setphysicalvolumesize 320G /dev/sda5
   ```

4. Grow back logical volume:

   ```bash
   resize2fs /dev/vg/lv
   ```

## Various links
