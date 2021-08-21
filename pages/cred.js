import { getCsrfToken } from 'next-auth/client'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function SignInPage({ csrfToken }) {



    const submit = (e) => {
        signIn('credentials', { username: 'test', password: '111111' })
    }

  return (
      <>
    <form method='post' action='/api/auth/callback/credentials'>
      <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
      <label>
        Username
        <input name='username' type='text'/>
      </label>
      <label>
        Password
        <input name='password' type='password'/>
      </label>
      <button type='submit'>Sign in</button>
    </form>
      {/* <button type='submit' onClick={submit}>Sign in</button> */}
      </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}