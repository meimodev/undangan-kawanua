/*TODO this is where the validation of the requested
   link The requested link (which is the key)
   gonna go to firestore to check its validity and which invitation
    its represent and respond by that data accordingly in this page*/

import dynamic from 'next/dynamic'
import {useRouter} from "next/router";
import {useEffect} from "react";
import {getDoc, doc} from 'firebase/firestore/lite';
import {firestoreGetDocData} from "../../firebase";

export const getStaticPaths = async (context) => {
    const docData = await firestoreGetDocData('-env-/hosts');
    const hosts = docData.names;
    const paths = hosts.map(e => ({params: {id: e}}));
    return {
        paths: paths,
        fallback: true,
    }
};

export const getStaticProps = async (context) => {
    //TODO make decent 404 page
    if (!context.params.id.includes('--')) {
        console.log('not contain -- as key query');
        return {
            notFound: true
        }
    }
    const [id, query] = context.params.id.split('--');
    if (!query) {
        console.log('key query is empty');
        return {
            notFound: true
        }
    }
    //check if hosts exist
    const envData = await firestoreGetDocData('-env-/hosts');
    const hosts = envData.names;
    const notFound = !hosts.includes(id);
    if (notFound) {
        console.log('hosts not exist');
        return {
            notFound: true
        }
    }
    // //check key validity
    const keyData = await firestoreGetDocData(id + '/' + query);
    if (typeof keyData === 'undefined') {
        console.log('key to hosts invitation not valid ');
        return {
            notFound: true
        }
    }

    const invData = await firestoreGetDocData(id + '/invitation');
    const photosData = await firestoreGetDocData(id + '/photos');
    const wishesData = await firestoreGetDocData(id + '/wishes');


    return {
        props: {
            id,
            guest: {key: query, keyData},
            invData,
            photosData,
            wishesData,
        },
    }

};

const Invitation1 = dynamic(() => import("../../comps/invitations/Invitation1"));
const Invitation2 = dynamic(() => import("../../comps/invitations/Invitation2"));
const Loading = dynamic(() => import("../../comps/Loading"));

const Invitation = (props) => {

    // console.log("Called in react component");
    const router = useRouter();

    if (router.isFallback) {
        return <Loading/>
    }

    // render the corresponded invitation by data passed through props
    switch (props.invData.type) {
        case 'WEDDING-1':
            return <Invitation1 data={props}/>;
        case 'WEDDING-2':
            return <Invitation2 data={props}/>;
        default :
            return <Invitation1 data={props}/>;
    }

};

export default Invitation;
