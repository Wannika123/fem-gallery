import Footer from "@/components/slug/Footer";

export function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = params; 

    return {
        title: slug.split('-').join(' ')
    }
}

export default function SlidePageLayout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    );
  }