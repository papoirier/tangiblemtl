<?php
require 'include.php';
$smarty->display('header.tpl');
?>	

	<div class="container">
			<div class="row">
					<section class="twocol alpha"></section>
					<section class="about sixcol">
					<div>
						<h1>Tangible Studio</h1>
						
						<article class="fr">
							<p>Les <strong>pare-soleil édition limitée</strong> de l’entreprise Tangible Studio sont réalisés dans un tout nouveau type de feutre entièrement 
							fait de fibres récupérés post-consommation et disponibles dans une palette de couleurs complète.</p>
	
							<p>Ces panneaux de feutre perforés laissent pénétrer la lumière tout en procurant un sentiment d’intimité. Ils sont idéaux pour 
							enjoliver fenêtres et portes-patio, ou encore comme séparateurs d’espace pour de grands appartements de style loft.</p>
							
							<p>La conception et la production des produits et feutres Tangible Studio est entièrement faite au Québec.</p>
	
							<p class="limited">Les pare-soleil édition limitée seront en vente au <a href="http://souk.sat.qc.ca/" title="souk@sat">souk@sat</a> du 
							29 novembre au 2 décembre 2012.</p>
						
						</article>
						
						<article class="en">
							<p>Tangible Studio’s <strong>limited edition shade screen</strong> panels are made from a new type of felt, entirely sourced from post-consumer 
							textile waste and available in a complete color palette.</p>
	
							<p>These perforated felt panels allow light to pass through while procuring a sense of intimacy to people. They are ideal to embellish 
							windows and patio doors, and for dividing large indoor spaces such as lofts.</p>
							
							<p>The design and production of Tangible Studio’s products and felts is entirely made in Québec.</p>
	
							<p class="limited">The limited edition shade screen will be on sale at the <a href="http://souk.sat.qc.ca/english/" title="souk@sat">souk@sat</a> 
							starting November 29th until December 2nd, 2012.</p>
						</article>
					</div>
					
					<div class="links">
						<p class="email"><?php $smarty->display('email.tpl'); ?></p>
						<p><a href="https://www.facebook.com/TangibleStudioInc" title="Tangible Facebook">Facebook</a></p>
					</div>
						
					</section>
					<section class="fourcol omega"></section>
			</div>
		</div>

<?php $smarty->display('footer.tpl'); ?>