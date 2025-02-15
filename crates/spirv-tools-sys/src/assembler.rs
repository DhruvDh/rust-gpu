use crate::shared;

#[repr(u32)] // SPV_FORCE_32_BIT_ENUM
pub enum BinaryOptions {
    None = 0x1,
    PreserveNumberIds = 1 << 1,
}

extern "C" {
    /// Encodes the given SPIR-V assembly text to its binary representation. The
    /// length parameter specifies the number of bytes for text. Encoded binary will
    /// be stored into *binary. Any error will be written into *diagnostic if
    /// diagnostic is non-null, otherwise the context's message consumer will be
    /// used. The generated binary is independent of the context and may outlive it.
    /// The SPIR-V binary version is set to the highest version of SPIR-V supported
    /// by the context's target environment.
    ///
    /// The options parameter is a bit field of
    /// spv_text_to_binary_options_t.
    #[link_name = "spvTextToBinaryWithOptions"]
    pub fn assemble(
        tool: *const shared::ToolContext,
        text: *const std::os::raw::c_char,
        size: usize,
        options: u32,
        binary: *mut *mut shared::Binary,
        diagnostic: *mut *mut crate::diagnostics::Diagnostic,
    ) -> shared::SpirvResult;
}
