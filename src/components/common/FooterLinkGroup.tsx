interface FooterPops {
    title:string,
    links:string[]
}
export const FooterLinkGroup = ({ title, links }:FooterPops) => (
  <div>
    <h4 className="font-bold text-white mb-6">{title}</h4>
    <ul className="space-y-4 text-gray-400">
      {links.map((link, i) => (
        <li key={i} className="hover:text-green cursor-pointer transition-colors">{link}</li>
      ))}
    </ul>
  </div>
);
