import React from "react";

import PageContainer, {PageHeader} from "@Layout/Page/Page.style";

const NotFound = () => {
    return (
        <PageContainer>
            <div className="NotFound-Container">
                <PageHeader>
                    Oops, this page cannot be found!
                </PageHeader>
            </div>
        </PageContainer>

    );
};

export default NotFound;
