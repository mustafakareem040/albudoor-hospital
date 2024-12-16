import Content from "@/components/utils/content";
import ContentResponse from "@/components/types/content";

export default  function ContentSection({data}: {data: ContentResponse}) {
    return <section className="bg-[#F9F9F9] mx-auto px-12 sm:px-20 lg:px-32 py-36">
        <Content data={data} />
    </section>
}