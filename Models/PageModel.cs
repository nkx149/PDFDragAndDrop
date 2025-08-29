namespace PdfWebApp.Models
{
    public class PageModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public int PageNumber { get; set; }
        
        public required string ThumbnailImgUrl { get; set; }

        public string? PreviewImgUrl { get; set; }

        public required string Zone {  get; set; }

        public byte[]? PdfPageBytes { get; set; }

        public string? OriginalLabel { get; set; }
    }
}
