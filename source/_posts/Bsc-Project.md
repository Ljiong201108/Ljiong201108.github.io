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

优化Application(多个xclbin，因为一个xclbin只能装40个kernel)
完成其他的压缩方式(lz4 zstd)，但是有的不支持大文件压缩，需要优化

关于gzip的大文件mm压缩，代码写了半小时，nnd花了10个小时找bug，最后发现是num_core设小了，是4，换成默认的8就好了。。。
tmd不是这个问题，是sw_emu有bug，我麻了。以后不用sw_emu了。。。

gzip/zlib compressMM现在支持大文件了，但是checksum还是有点问题。。。

gzip/zlib的decompress分段式stream居然一次性就过了！
稍微修改了一下S2MM的内容，不会多输出东西。原版是让他多输出东西然后

snappy的CRC也是0
gzip不同的chunksize和blocksize压出来的crc也不同，这个crc再解压的时候是不检查的

// 更改了snappy decompress kernel的inputSize成uint64_t，正确性需要以后测试

所有的compress checksum都暂时忽略掉
lz4 dict ID假设是没设置的，设置了就报错
lz4的footer取消了checksum，因为64GB不好设置这个

zstd的压缩方法：
将文件分块，每块送进kernel压缩，会产出多个frame，最后将这些frame按顺序放好即可

zstd的解压方法：
zstd的kernel一次能处理一个frame，所以按frame依次将数据传入，最后将解压好的数据按顺序放好即可

lz4的压缩方法：
将文件分块，每块送进kernel压缩，会产生多个block，每个block选择压缩的还是未压缩的，将选择好的数据按顺序放回即可
所有的block组成一个frame（其实可以有多个frame）

lz4的解压缩方法：
lz4的解压缩kernel能处理多个block，所以对于每个frame，将block分段读入解压，将解压好的数据按顺序放好

TODO: 
完善gzip/zlib和snappy接口
gzip外部的接口里面有hexdump，后期需要去除
有的不支持大文件压缩，需要优化
优化Pointer(集成内置的OCL_CHECK)
test多block下压缩算法（gzip/zlib）是否能顺利运行
加个时间的记录
hash function