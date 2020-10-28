initSidebarItems({"enum":[["HeapsError","Possible errors returned by `Heaps`."],["Kind","Allocator kind."],["MemoryUsage","Scenarios of how resources use memory."]],"struct":[["DedicatedAllocator","Dedicated memory allocator that uses memory object per allocation requested."],["DedicatedBlock","Memory block allocated from `DedicatedAllocator`."],["GeneralAllocator","No-fragmentation allocator. Suitable for any type of small allocations. Every freed block can be reused."],["GeneralBlock","Memory block allocated from `GeneralAllocator`."],["GeneralConfig","Config for `GeneralAllocator`."],["Heaps","Heaps available on particular physical device."],["LinearAllocator","The `LinearAllocator` is best suited for short-lived allocations. The allocation strategy has minimal overhead and the implementation is fast. But holding a single block will completely stop memory recycling."],["LinearBlock","Memory block allocated from `LinearAllocator`."],["LinearConfig","Config for [`LinearAllocator`]. Refer to documentation on [`LinearAllocator`] to better understand what the configuration options mean."],["MappedRange","Represents range of the memory mapped to the host. Provides methods for safer host access to the memory."],["Memory","Memory object wrapper. Contains size and properties of the memory."],["MemoryBlock","Memory block allocated from `Heaps`."],["MemoryHeapUtilization","Memory utilization of one heap."],["MemoryTypeUtilization","Memory utilization of one type."],["MemoryUtilization","Memory utilization stats."],["TotalMemoryUtilization","Total memory utilization."],["Writer","Wrapper structure for a mutable slice with deferred flushing for non-coherent memory."]],"trait":[["Allocator","Allocator trait implemented for various allocators."],["Block","Block that owns a `Segment` of the `Memory`. Implementor must ensure that there can't be any other blocks with overlapping range (either through type system or safety notes for unsafe functions). Provides access to safe memory range mapping."]],"type":[["AtomSize","Type for non-coherent atom sizes."],["Size","Type for any memory sizes."]]});