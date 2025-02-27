export type SocialLink = {
	platform: string
	href: string
	me?: string
	text: string
	icon: string
	footerOnly?: boolean
}

export type SiteInfo = {
	name: string
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	socialLinks: SocialLink[]
}

const siteInfo: SiteInfo = {
	name: "Astro",
	title: "Build the web you want",
	description:
		"Astro is an all-in-one framework for building fast websites faster. Grab content from anywhere, deploy everywhere, and show the web what you've got.",
	image: {
		src: "/og/social.jpg",
		alt: "Build the web you want",
	},
    // YT video channel Id (used in media.astro)
    ytChannelId: '',
    // Optional, user/author settings (example)
    // Author: name
    author: '', // Example: Fred K. Schott
    // Author: Twitter handler
    authorTwitter: '', // Example: FredKSchott
    // Author: Image external source
    authorImage: '', // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
    // Author: Bio
    authorBio: 'Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro',	
	socialLinks: [
		{
			platform: "github",
			href: "https://github.com/withastro/astro",
			me: "https://github.com/withastro/",
			text: "Go to Astro's GitHub repo",
			icon: "social/github",
		},
		{
			platform: "discord",
			href: "/chat",
			text: "Join the Astro community on Discord",
			icon: "social/discord",
		},
		{
			platform: "twitter",
			href: "https://twitter.com/astrodotbuild",
			me: "https://twitter.com/astrodotbuild",
			text: "Follow Astro on Twitter",
			icon: "social/twitter",
		},
		{
			platform: "mastodon",
			href: "https://m.webtoo.ls/@astro",
			me: "https://m.webtoo.ls/@astro",
			text: "Follow Astro on Mastodon",
			footerOnly: true,
			icon: "social/mastodon",
		},
	],
}

export default siteInfo
