import "../styles/components/page_wrapper.css";

export default function PageWrapper({ pageContent }){
    return(
        <div className="page-wapper">
            {pageContent}
        </div>
    );
}