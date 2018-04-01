import React from 'react'
import styles from "./components.module.css"

class Imprint extends React.Component {
  render () {
    return (
      <div className={`${styles.row4} ${styles.small}`}>
        <div className={styles.col41}>
          <div className={styles.imprintdetails}>Responsible for
    				<br />the contents of this website
    			</div>
    			<div className={styles.imprintdetails}>Atelier Christian Awe
    				<br />Siegfriedstr. 204a
    				<br />10365 Berlin, Germany
    			</div>
    			<div className={styles.imprintdetails}>phone: +49 30 844 199 40
    				<br />email: <a href="mailto:info@christianawe.com">
    					info@christianawe.com
    				</a>
    			</div>
    			<div className={styles.imprintdetails}>USt-IdNr.: DE252685252</div>
    			<div className={styles.imprintdetails}>Design: <a target="_blank" href="http://fassonfreddyfuss.com">FASSON</a></div>
        </div>
        <div className={styles.col42}>
          <div className={styles.imprintdetails}>
    				©2018 Atelier Christian Awe – all rights reserved. The contents and works published on this website are
    				governed by the copyright
    				laws of Germany. Any duplication, reproduction, processing, distribution or any form of utilisation
    				beyond the
    				scope of copyright law shall require the prior written approval of the studio Christian Awe.
    			</div>
    			<div className={styles.imprintdetails}>DISCLAIMER</div>
    			<div className={styles.imprintdetails}>Liability for Content</div>
    			<div className={styles.imprintdetails}>
    				We make every effort to keep the information on our Web site current, but accept no liability whatsoever
    				for the content
    				provided. Pursuant to 7 par. 1 of TMG (German Tele-Media Act), the law limits our responsibility as a
    				service provider
    				to our own content on these Web pages.
    			</div>
    			<div className={styles.imprintdetails}>
    				According to 8 to 10 of TMG, we are not obligated to monitor third party information provided or stored
    				on our Web site.
    				However, we shall promptly remove any content upon becoming aware that it violates the law. Our
    				liability in such
    				an instance shall commence at the time we become aware of the respective violation.
    			</div>
    			<div className={styles.imprintdetails}>Liability for Links</div>
    			<div className={styles.imprintdetails}>
    				Our site contains links to third-party Web sites. We have no influence whatsoever on the information on
    				these Web sites and
    				accept no guaranty for its correctness. The content of such third-party sites is the responsibility of
    				the respective
    				owners/providers.
    			</div>
    			<div className={styles.imprintdetails}>
    				At the time third-party Web sites were linked to ours, we found no grounds whatsoever of any likely
    				contravention of the
    				law. We shall promptly delete a link upon becoming aware that it violates the law.
    			</div>
        </div>
        <div className={styles.col43}>
          <div className={styles.imprintdetails}>Copyrights</div>
    			<div className={styles.imprintdetails}>
    				The content and works provided on these Web pages are governed by the copyright laws of Germany.
    				Duplication, processing,
    				distribution, or any form of commercialization of such material beyond the scope of the copyright law
    				shall require
    				the prior written consent of its respective author or creator.
    			</div>
    			<div className={styles.imprintdetails}>Data Protection</div>
    			<div className={styles.imprintdetails}>
    				Please be aware that there are inherent security risks in transmitting data, such as e-mails, via the
    				Internet, because it
    				is impossible to safeguard completely against unauthorized access by third parties. Nevertheless, we
    				shall safeguard
    				your data, subject to this limitation. In particular, personal information will be transmitted via the
    				Internet
    				only if it does not infringe upon third-party rights, unless the respective party has given its prior
    				consent in
    				view of such security risks. Accordingly, as the Web site provider, we shall not be held liable for any
    				damages
    				incurred as a consequence of such security risks or for any related acts of omission on our part.
    			</div>
    			<div className={styles.imprintdetails}>
    				We oppose the use of any available contact information by a third party for sending unsolicited
    				advertisements. As the Web
    				site provider, we reserve the express right to take legal action against unsolicited mailing or
    				e-mailing of spam
    				and other similar advertising materials.
    			</div>
    			<div className={styles.imprintdetails}>
    				<a href="https://ra.de/bsp/kanzlei/geo">Source</a>
    			</div>
        </div>
      </div>
    )
  }
}

export default Imprint
