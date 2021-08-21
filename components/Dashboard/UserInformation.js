import React, { Component } from 'react';
import Link from 'next/link';
import FormChangeUserInformation from './ChangeUserInfoForm';
import { signIn, signOut, useSession } from 'next-auth/client'



const UserInformation = () => {

    const [ session, loading ] = useSession()

    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
            icon: 'icon-user',
            active: true,
        },
        {
            text: 'Notifications',
            url: '/account/notifications',
            icon: 'icon-alarm-ringing',
        },
        {
            text: 'Invoices',
            url: '/account/invoices',
            icon: 'icon-papers',
        },
        {
            text: 'Address',
            url: '/account/addresses',
            icon: 'icon-map-marker',
        },
        {
            text: 'Recent Viewed Product',
            url: '/account/recent-viewed-product',
            icon: 'icon-store',
        },
        {
            text: 'Wishlist',
            url: '/account/wishlist',
            icon: 'icon-heart',
        },
    ];

    //Views
    const accountLinkView = accountLinks.map((item) => (
        <li key={item.text} className={item.active ? 'active' : ''}>
            <Link href={item.url}>
                <a>
                    <i className={item.icon}></i>
                    {item.text}
                </a>
            </Link>
        </li>
    ));

    return (
        <section className="ps-my-account ps-page--account">
    
                <div className="row">
                    <div className="col-lg-3">
                        <div className="ps-section__left">
                            <aside className="ps-widget--account-dashboard">
                                <div className="ps-widget__header">
                                    {/* <img src="/static/img/users/3.jpg" /> */}
                                  {session &&  <figure>
                                        <figcaption>{session.user.name}</figcaption>
                                        <p>{session.user.email}</p>
                                    </figure> }
                                </div>
                                <div className="ps-widget__content">
                                    <ul className="ps-list--user-links">
                                        {accountLinks.map((link) => (
                                            <li
                                                key={link.text}
                                                className={
                                                    link.active ? 'active' : ''
                                                }>
                                                <Link href={link.url}>
                                                    <a>
                                                        <i
                                                            className={
                                                                link.icon
                                                            }></i>
                                                        {link.text}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link href="/account/my-account">
                                                <a>
                                                    <i className="icon-power-switch"></i>
                                                    Logout
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="ps-page__content">
                            <FormChangeUserInformation />
                        </div>
                    </div>
                </div>
         
        </section>
    );
};

export default UserInformation;
