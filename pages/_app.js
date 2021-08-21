// import '../public/css/bootstrap.min.css'
import { Provider } from 'next-auth/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/animate.min.css'
import '../public/css/boxicons.min.css'
import '../public/css/flaticon.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-image-lightbox/style.css'
import '../public/css/style.css'
import '../public/css/responsive.css'

import Layout from '../components/_App/Layout';

const MyApp =  ({ Component, pageProps }) => {


    return (
        <Layout>
                <Provider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      options={{
        // Client Max Age controls how often the useSession in the client should
        // contact the server to sync the session state. Value in seconds.
        // e.g.
        // * 0  - Disabled (always use cache value)
        // * 60 - Sync session state with server if it's older than 60 seconds
        clientMaxAge: 0,
        // Keep Alive tells windows / tabs that are signed in to keep sending
        // a keep alive request (which extends the current session expiry) to
        // prevent sessions in open windows from expiring. Value in seconds.
        //
        // Note: If a session has expired when keep alive is triggered, all open
        // windows / tabs will be updated to reflect the user is signed out.
        keepAlive: 0
      }}
      session={pageProps.session} >
            <Component {...pageProps} />
            </Provider>
        </Layout>
    )
}



export default MyApp