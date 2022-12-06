---
title: Bsc Project
date: 2022-12-04 03:09:08
tags:
---

{% raw %}<div class="post-summary">{% endraw %}

Bsc. Project的Document

{% raw %}</div>{% endraw %}

<!-- more -->

<style type="text/css">
.post-summary { display: none; }
</style>

data_compress L3 
inflate.hpp line 650 -> inline
huffman_decoder all non-inline function -> inline function

规范化了kernel的命名

Snappy先把文件分成若干个chunk(由于host buffer大小的限制), 每个chunk再分成若干个block, kernel可以一次性处理一个chunk, 但是内部还是一个block一个block压缩的

Questions:
gzip&zlib的文件名和文件大小不太对劲

gzip/zlib和snappy完工

lz4 host buffer size和block size目前是定死的，日后可以更改

zstd所有的步骤都在kernel里面 -> 64GB要开一个64GB的vector可能开不下 -> 可能需要overlap

所有的decompress 加个max_out_size

TODO: 
完善gzip/zlib和snappy接口
完成其他的压缩方式(lz4 zstd)
优化Application(多个xclbin，因为一个xclbin只能装40个kernel)
优化Pointer(集成内置的OCL_CHECK)
test多block下压缩算法（gzip/zlib）是否能顺利运行
加个时间的记录
hash function