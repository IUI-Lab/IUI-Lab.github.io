interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	// site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	site: 'https://iui-lab.github.io/', // Write here your website url
	author: 'Intelligent User Interface Laboratory', // Site author
	title: '成蹊大学 知的インタフェース研究室', // Site title.
	description: '成蹊大学知的インタフェース研究室のウェブページ', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
