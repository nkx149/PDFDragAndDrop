namespace PdfWebApp.Models
{
    public class UndoStackItem
    {
        public PageModel? Page { get; set; }

        public int MainIndex { get; set; }

        public int ZoneIndex { get; set; }
    }
}
