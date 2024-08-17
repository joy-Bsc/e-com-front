import React, { useEffect } from 'react';
import FeatureStore from '../store/FeatureStore';
import Layout from '../components/layout/Layout';
import LegalContents from '../components/features/LegalContents';

const RefundPage = () => {
    const {LegalDetailsRequest} = FeatureStore();

    useEffect(() => {
        (async () => {
            await LegalDetailsRequest("refund");
        })();
    }, []);

    return (
        <Layout>
            <LegalContents />
        </Layout>
    );
};

export default RefundPage;