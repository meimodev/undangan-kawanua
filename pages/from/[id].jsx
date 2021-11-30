/*TODO this is where the validation of the requested
   link The requested link (which is the key)
   gonna go to firestore to check its validity and which invitation
    its represent and respond by that data accordingly in this page*/

import dynamic from 'next/dynamic'
import {useRouter} from "next/router";
import {useEffect} from "react";
import {getDoc, doc} from 'firebase/firestore/lite';
import {firestore} from "../../firebase";

export const getStaticPaths = async () => {
    const docRef = doc(firestore(), '-env-/hosts');
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();
    const hosts = docData.names;
    const paths = hosts.map(e => ({params: {id: e}}));
    return {
        paths: paths,
        fallback: true,
    }
};

export const getStaticProps = async (context) => {

    /*check if data with passed id is exist, if not then return {notFound: true*/
    const docRef = doc(firestore(), '-env-/hosts');
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();
    const hosts = docData.names;

    const notFound = !hosts.includes(context.params.id);

    return {
        props: {id: context.params.id},
        notFound
    }
};

const Invitation1 = dynamic(() => import("../../comps/invitations/Invitation1"));
const Invitation2 = dynamic(() => import("../../comps/invitations/Invitation2"));

const Invitation = () => {

    const router = useRouter();
    const {id, param} = router.query;

    if (router.isFallback) {
        return <div className='text-lg font-bold text-red-700'>
            Loading .....
        </div>
    }

    return (
        /*need to check if the key to invitation is valid
        * if valid then render the corresponded invitation by the key
        * else redirect user to invalid key page
        * */

        <div>
            <h1>
                This is the invitation Authentication page
            </h1>
            <h1>
                QUERY: {id}, PARAM:{param}
            </h1>
            {id === 'jhon' ? <Invitation1/> : <Invitation2/>}
        </div>
    )
};

export default Invitation;
