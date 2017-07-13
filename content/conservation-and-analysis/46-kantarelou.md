---
id: "46"
title: A Defined Protocol for In Situ Micro-XRF Compositional Analysis of Bronze Figurines from the National Museum of Damascus, Syria
type: essay
contributor:
 - first_name: V.
   last_name: Kantarelou
   affiliation: Institute of Nuclear and Particle Physics, NCSR Demokritos, Athens, Greece
 - first_name: A. G.
   last_name: Karydas
   affiliation: Institute of Nuclear and Particle Physics, NCSR Demokritos, Athens, Greece
 - first_name: L.
   last_name: Mahfoud
   affiliation: Ministry of Culture, Directorate General of Antiquities & Museums, Syria
 - first_name: A.
   last_name: Qurdab
   affiliation: Ministry of Culture, Directorate General of Antiquities & Museums, Damascus
 - first_name: M.
   last_name: Al-Saadi
   affiliation: Ministry of Culture, Directorate General of Antiquities & Museums, Damascus
 - first_name: V.
   last_name: Argyropoulos
   affiliation: Technological Educational Institute of Athens (TEI), Department of Conservation of Antiquities & Works of Art, Athens
abstract: |
    The use of portable and handheld XRF analyzers has been widely adopted in metal compositional studies by cultural heritage professionals. However, studies have shown that the lack of certified reference materials and standardized quantification approaches has contributed to rather poor reproducibility of quantitative results among end-users in the analysis of historic and ancient copper alloys. The limited depth resolution of XRF analysis can impose additional difficulties for proper interpretation of analytical data obtained for ancient metal alloys, due to stratified corrosion layers at the metal-corrosion interface.

    During the PROMET European FP6 project, a customized micro-XRF spectrometer was transported to the National Museum of Damascus, Syria, to study its unique bronze collection. Analyses were carried out on many important artifacts, such as Late Bronze Age gilded-bronze figurines from the site of Ugarit. The paper focuses on the micro-XRF analyses of two of these bronze figurines and highlights the methodological issues regarding the optimization and validation of the micro-XRF analytical approach for ancient copper alloys. The XRF analyses of these unique Mesopotamian figurines are presented with an emphasis on best practices for micro-XRF measurement protocols, data analysis, and interpretation.
weight: 712
---

## Introduction

During the PROMET European FP6 project, a micro-XRF mobile spectrometer was transported to the National Museum of Damascus, Syria, where it was applied and validated for the quantitative noninvasive analysis of unique museum metal collections across the Mediterranean region, successfully addressing archaeological and conservation questions. Given the value of these collections, transport of objects or sampling for analysis is generally not permitted. Thus, the development and validation of a reliable portable technology is critical for comparisons of analytical compositional results, especially for similar museum collections or objects housed around the world.

The mobile micro-XRF spectrometer of NCSR “Demokritos” was utilized in campaigns at the Archaeological Museum of Ancient Messene (Peloponnese), the Palace Armoury Museum in Malta, the Umm Qais and Numismatic Museums in Jordan, and the National Museum of Damascus, Syria. These studies revealed important information about their metals collections concerning the manufacturing techniques and the condition of objects from various periods, but more importantly developed a standard approach for validating the precision and accuracy of compositional data for ancient and historic copper and iron alloys, as well as gilding techniques from various periods. At the Archaeological Museum of Ancient Messene, high-tin bronze mirrors dating from the second century BC were analyzed to identify the composition of the alloy and corrosion products, as well as to characterize the reflecting gray-silverish and black-colored surface finishes of the mirrors.[^1] The Palace Armoury campaign included the XRF analysis of steel armor elements with emphasis on manufacturing techniques such as surface gilding.[^2] At Yarmouk University in Jordan, Roman copper-alloy artifacts from the Umm Qais Museum were analyzed to characterize the metal composition and corrosion products,[^3] while gold coins from the collection of the Numismatic Museum were also analyzed in order to identify compositional differences and elucidate the use of raw materials and processing practices through different historical periods. At the National Museum of Damascus, gilded copper and gold artifacts of the third millennium BC and from about 1500 BC were studied. The micro-XRF analysis was used for the first time to investigate the composition of copper and gold alloys and their corrosion products, the thickness of the gold foil used for the gilding, and finally to assess their state of preservation.[^4]

The results of these studies introduced and validated universal semiquantitative criteria for the analysis of bronze artifacts using a certifiable quantification model, which was also tested during a comparison exercise organized by the Getty Museum.[^5] This approach is discussed here, based on the scientific examination of two unique Bronze Age figurines from the National Museum of Damascus. These gilded copper-alloy figurines represent the El god (the principal god of Ugarit) and the god Baal, both dated to the Late Bronze Age (fourteenth century BC) ([fig. 46.1a–b](#46.1a)). Compositional results of the copper alloys are presented to highlight the main problems in micro-XRF analysis of ancient bronzes, such as the heterogeneity of the alloys; the importance of using filters in the excitation path; and the production of reliable quantitative results. The scientific examination of the figurines allowed us to develop practical guidelines for micro-XRF users on how to generate good quality XRF analytical data that are representative of the bulk composition of the metal alloy.

{{< q-figure-group id="46.1a, 46.1b" grid="2" >}}

## Background

XRF spectrometry is the most popular technique for the elemental analysis of culture heritage (CH) objects,[^6] since it is noninvasive and can detect a wide range of elements, providing fast qualitative and in some cases validated quantitative results.

Despite the obvious advantages, the technique does have limitations, in particular when it is used for the analysis of CH metal objects utilizing an exciting X-ray beam with a size at the order of 0.1mm or below. The high spatial resolution of the exciting X-ray may produce misleading results for specific metal alloys. This is due to their microscale heterogeneity, which originates from the degree of solubility of the individual constituent elements and/or from the formation of corrosion products on the surface.[^7]

In the case of quaternary copper (Cu) alloys with significant lead (Pb) concentration, segregation effects appear due to the immiscibility of the Cu and Pb phases, resulting in the concentration of Pb globules at the Cu grain boundaries.[^8] Also, surface finishing techniques may result in partial removal of Pb from the intergranular regions or to cause Pb smearing across the surface.[^9] In the case of bronzes, the corrosion process may alter the surface in particular due to the phenomenon of decuprification. For binary bronze alloys, the alteration of the surface is very well described by Luc Robbiola and colleagues, who proposed a factor to transform the analytical results obtained from the surface (corrosion layer) to those that represent the bulk of the metal alloy.[^10] Another way to achieve reliable quantitative results is to distinguish corroded from “corrosion-free” surfaces, if such exist. In the case of binary (Cu-Sn) bronzes, the ratio of Sn Kα to Lα lines of the examined alloy was suggested[^11] in order to access a finishing technique or/and the alteration of the original alloy. Later on, this ratio was further developed as a robust semiquantitative criterion to assess the presence or absence of surface alteration, which can be used for different XRF spectrometers and operational conditions.[^12] Another way to approach the original composition of the alloy is by using energy dispersive X-ray fluorescence (EDXRF) measurements combined with Monte Carlo methods.[^13]

Another problem with the micro-XRF analysis of metals is the presence in the spectrum of peaks that energetically coincide with constituent elements’ characteristic X-rays. The surface of a “corrosion-free” metal alloy exhibits a rather polycrystalline structure. Therefore, when the X-ray tube continuum-Bremsstrahlung radiation is utilized as an excitation source, it is probable that the Bragg equation will be fulfilled at certain energies under a particular geometrical setup configuration. More specifically, according to Bragg’s law:

- 2<em>d</em> sin *θ* = <em>n</em>λ, where

- *d* = sample crystal lattice spacing;

- 2<em>θ</em> = angle between the incident and the reflected beam from the sample; and

- λ = wavelength of the incident radiation.

Thus, it might be possible that, for certain values of *d* and *θ*, the aforementioned equation may be fulfilled by an incident wavelength λ contained within the polychromatic tube spectrum. As a consequence, various undesirable peaks that correspond to different orders of diffraction will appear in the spectrum and possibly interfere with characteristic X-rays of interest. The phenomenon is significantly enhanced with the highly focused exciting beam produced by X-ray lenses in micro-XRF spectrometers. In this case, due to the well-defined excitation geometry, the Bragg condition will be fulfilled by the majority of the incident flux at a particular energy, whereas with broader beams the diffraction peaks are less pronounced. The appearance of the diffraction peaks can be identified in the XRF spectra based on the following criteria:

1. Usually a Bragg peak does not coincide with the tabulated energy of any characteristic X-ray, or if it does, it is not accompanied by the rest of the transition lines following the decay of an inner shell (K-, L-) hole. For example, if the energy of the diffraction peak coincides with the Κα line of one element, then depending on the presence of this particular element within the analyzed sample, the respective Κβ line either has an abnormal relative intensity with respect to the Κα line intensity or it would be completely absent.

2. Typically the diffraction peaks exhibit a broader shape than the typical characteristic X-ray peaks, which are modulated by the detector energy resolution and natural linewidth and not by the sample irradiation geometry.

3. If the sample orientation is changed slightly with respect to the exciting beam, a respective shift in their energy is observed.

A standard methodology to minimize or even eliminate the presence of Bragg peaks in the spectrum is to introduce a strong absorber between the source and the sample/spot to filter the interfering part of the exciting radiation. Usually the low energy continuum (10 k eV) has a more pronounced probability of undertaking Bragg diffraction.

In micro-XRF analysis, a polycapillary X-ray lens is usually utilized in the excitation channel to collect efficiently, propagate, and focus to a few tens of micrometers the exciting X-ray beam radiation. Nevertheless, the X-ray lens introduces major difficulties in quantification, since its transmission efficiency—being highly dependent on the transmitted X-ray energy—results in significant and not easily predicted modifications of the energy distribution of the primary tube spectrum. Although quantitative analysis by direct comparison with a certified reference material (CRM) is a rather simple and straightforward approach, it assumes the availability of CRMs with a compositional profile (matrix) similar to the unknown one. This necessity can be avoided, however, by applying for the micro-XRF quantification analysis a fundamental parameters approach that utilizes an analytical description of the lens transmission efficiency.[^14] This methodology is applied below for the compositional analysis of two gilded-bronze figurines from the National Museum of Damascus in Syria.

## The Gilded Bronze Figurines from the Late Bronze Age

This paper focuses on the analysis of two gilded-bronze figurines using micro-XRF during the in situ campaign. The figurines belong to the Late Bronze Age (1400–1300 BC) and were discovered at the southern area of Ugarit, which was first excavated in 1929 by French archaeologists. Site research suggests that the city acted as a link between the Near East and the ancient Mediterranean world.[^15] Ugarit became the center of interaction between Egypt, Crete, Cyprus, and Anatolia, promoting an exchange of the earliest artistic styles within the ancient world. These statues represent ancient gods: the first one represents the El god (inv. RS23) and the other, the Baal god (inv. 3572) (see fig. 46.1). The El god figurine is in a seated position with its right hand raised, apparently in blessing, and its crown resembles the crown of Osiris. The stance of the Baal god is borrowed from Egyptian images of triumphant kings striding over their fallen enemies.[^16] At that time, Ugarit art was highly influenced by Egyptian art, as can be observed in the examined artifacts. In another paper,[^17] we discussed the methodology for the micro-XRF analysis of the gilded parts of the objects. The examination of gilded areas showed the use of the foil gilding technique, determined the composition of the gilded areas, and revealed the use of different gold sheets on these objects.

## Measurement Setup

The scientific examination of the bronze figurines was carried out by a portable micro-XRF spectrometer ([fig. 46.2](#46.2)). This instrument was developed based on a commercial spectrometer (Bruker-Nano ARTAX) with optimized features regarding the design of the spectrometry head and the lens transmission efficiency at high energies (20 k eV). The spectrometer probe consists of an X-ray microfocus Rh-anode tube (spot size 50 μm x 50 μm, max 50 kV, max 1 mA, 30W maximum power consumption, Be window 0.2 mm thickness); and a polycapillary X-ray lens as a focusing optical element (IFG), with focal distance equal to 21.2 mm and with spatial resolution of \~40–100 μm. The X-ray detection chain consists of an electrothermally cooled 10 mm<sup>2</sup> silicon drift detector (X-Flash, 1000B) with FWHM equal to 146 eV at 10 kcps coupled with a digital signal processor. A color CCD camera (ca. 13x magnification) is used for sample illumination and a dimmable white LED to produce a laser spot. Three different stepping motors, coupled with the spectrometer head, allow its movement in three dimensions to facilitate 2D scanning measurements. Finally, a portable supporting stand for the micro-XRF spectrometer (developed in-house) allows its vertical movement in a range of about 50 cm. The portable stand can be easily disassembled, packed, and transported to a museum or a site.

{{< q-figure id="46.2" >}}

## Results/Discussion

*The Problem of Heterogeneity:* The microscale heterogeneity of CH metals was validated during the PROMET campaign and was reported in the book *The Preservation of Metal Museum Collections from the Mediterranean Region: The PROMET Approach*.[^18] In this study, the examination of ancient copper alloys highlights the necessity of area mapping to deduce mean values of elemental intensities compared to single-spot micro-XRF analysis. It is very characteristic that the homogeneity of the SRM BCR-691 copper alloys is ensured only for a beam-spot size at the order of 5 mm due to their microscale heterogeneity. Typical copper alloys were analyzed by performing micro-XRF mapping in small (\~0.5 x 0.5 mm<sup>2</sup>) and large (\~5 x 5 mm<sup>2</sup>) areas. [Table 46.1](#table-46.1) reports the systematic area scans performed for the copper BCR-691Α alloy. The elemental intensities deduced from each area scan were averaged and the respective standard deviations (STDMV %) are presented. In addition, the table gives the standard deviation (%) of the mean value determined by averaging the individual mean values of all the area scans for a specific elemental intensity.

{{< q-table id="46.1" scale=".6" border="horizontal" >}}

Given these results, what would be an appropriate measurement methodology that would generate representative results of the metal alloy bulk composition? The following practical guidelines should be taken into account:

1. The scanning micro-XRF analysis should be conducted in at least three different areas \~1 mm x 1mm or larger, containing an adequate number of spot measurements (30) with step size equal to or slightly larger than the spatial resolution of the exciting beam (\~0.1 mm in our case), and the respective mean average elemental intensities should be averaged.

2. If a scanning mode of analysis cannot be applied, as many single-spot measurements as possible should be taken at different areas of the analyzed surface to deduce mean elemental intensities that represent more accurately the bulk composition of the alloy.

*The Need for Filtered Excitation:* As discussed above, the surface of a bronze object exhibits a polycrystalline structure that may produce parasitic XRD peaks on the XRF spectrum that sometimes coincide with the energy region in which characteristic X-ray lines appear. The use of a filter in the excitation path can eliminate the influence of this phenomenon. Another advantage to using a filter is the improvement of peak-to-background at the energy region where minor or even trace elements (such as zinc, arsenic, or selenium) may be expected, and also the reduction of pile-up peaks.

As an example, a single-spot measurement was taken on the surface of the El-god figurine using unfiltered versus filtered excitation. In the case of bronze alloy analysis, the selected filter consisted of a sandwich of the following materials: cobalt (Co) (17.7 ± 1.3) μm, titanium (Ti) (23.64 ± 0.18) μm, and palladium (Pd) (11.3 ± 0.3) μm.

Both spectra ([fig. 46.3](#46.3)) showed that the statue is made of a binary copper-tin alloy with some traces of iron, zinc, and arsenic. In the case of the filtered excitation, the background was reduced, and the presence of selenium and lead traces in the alloy was revealed. The detection of trace elements is extremely important in archaeometric studies, because it can give clues about the provenance of raw materials and the manufacturing process.

{{< q-figure id="46.3" >}}

*Surface Corrosion Products:* The identification of a patina layer or surface corrosion products in XRF analysis relies on the detection of particular elements, mostly of elements with low atomic number like sulfur (S) or chlorine (Cl), which are signs/fingerprints of certain types of copper- or tin-related corrosion products. Another criterion is applicable when medium atomic number elements like tin are included in the bulk composition of the metal alloy. For example, in bronze alloys the variation of the (L/K) intensity ratio for the Sn-characteristic X-rays among different corroded and corrosion-free areas can indicate the presence of an alteration of the original alloy surface. The intensity of L X-ray lines, due to their significantly lower energy relative to the K-lines, is mostly affected by the at-depth distribution of the element, that is, whether it is on the surface layer or below; thus, a higher value probes a surface location of tin, whereas a lower- or negligible-value L-intensity gives direct evidence that a surface layer without tin acts as an absorbing layer. Moreover, in order to probe efficiently the elements S, Cl, and Sn L-X-rays, an unfiltered tube radiation is suitable as an exciting X-ray source. It should be stressed that the XRF analysis cannot identify the mineralogical type of a corrosion product, as the XRD or FTIR analysis can. However, through the elemental analysis, XRF can reveal elemental associations compatible with particular types of corrosion products.

An area map was performed at the back of the El god figurine (see [fig. 46.1a](fig, 46.1a)). The black quadrangle in [figure 46.4a](fig, 46.4a) defines the area of analysis, which shows both black and green coloration. The measurement conditions were set at 50 kV, 600 μA, 30 s/step, and 0.1 mm/step, total area of analysis 0.5 × 0.8 mm<sup>2</sup> (42 measurements). In [figures 46.4b–c](#46.4b), the Cu Kα and the ratio of Sn Lα/Kα elemental intensities in each analyzed area are presented. The warm colors correspond to higher intensity values: therefore in the green region (on the right side of the scan) the increment of Cu Kα line points to the formation of a green copper-corrosion product (possibly malachite due to absence of S and Cl from the recorded spectra); whereas in the black area (down and left) the increment of Sn characteristic lines reveals the formation of a black tin corrosion products (possibly tin oxides).

{{< q-figure-group id="46.4a, 46.4b, 46.4c" grid="3" >}}

*Certifiable Quantitative Results:* The XRF screening of reddish-brown areas on the surface of the Baal god figurine (see for example photos of three selected areas, [fig. 46.5a–c](#46.5a)) could indicate (in principle) corrosion-free areas as opposed to those with the presence of reddish corrosion products (most likely cuprite). It is not possible to discriminate such areas by visual examination alone. This new methodology for screening was previously proposed,[^19] wherein the relative ratio of Sn Kα/Lα to the respective value obtained by a reference binary Cu-Sn alloy was used as a criterion for identifying an area altered by corrosion. This ratio was theoretically calculated and experimentally found to be rather constant, being independent of the tin content, the measurement/excitation conditions (filtered/unfiltered excitation, operational voltage, irradiation geometry, micro- or milli-beam), and the type of the XRF spectrometer (anode material, detection system, etc.). Since the established criterion was fulfilled for only one spot ([fig. 46.5b](#46.5b)), quantitative results obtained for other analyzed spots were abandoned. In order to have an idea of the errors that could be introduced in the quantitative results for the bronze alloy, [figure 46.5](#46.5) reports also the elemental concentrations as deduced from the analytical micro-XRF data obtained for spots (a) and (c). It is clear that without incorporating the universal screening criterion developed for the bronze alloys, the compositional results could indicate much higher Sn concentration (260% and 156%, respectively) than the actual value, suggesting a different manufacturing technology.

{{< q-figure-group id="46.5a, 46.5b, 46.5c" grid="3" >}}

## Conclusions

Within the PROMET project, a portable micro-XRF spectrometer, based on an industrial prototype but with custom-selected hardware components and measurement head, was utilized on two bronze figurines housed at the National Museum of Damascus. Optimized analysis protocols were developed with the aim of achieving an accurate and precise compositional analysis of the Cu alloys, overcoming spectral interferences that arise due to the polycrystalline nature of the alloy’s surface. Filters for the detection of bronze alloys should first be tested and the minimum representative area of analysis should be examined and specified on reference bronze alloys. Finally, the quantification procedure should only be used on corrosion-free areas in order to produce reliable analytical results. This paper outlined this methodological approach to carry out verifiable and reproducible compositional analysis.

## Acknowledgments

We would like to thank Mr. Eythimios Bistekos for his technical assistance during the in situ campaign in Damascus, Syria, and Dr. Demetrios Anglos for providing us with the reference bronze standards. We are also grateful to Dr. Maamoun Abdulkarim, Mr. Maher Azar, the staff of the Ministry of Culture of Syria, and the curators of the National Museum of Damascus for granting us the permission to study the unique gilded bronze figurines, for their hospitality, and for overall assistance during our campaign.

## Notes

[^1]: Giannoulaki et al. 2007, Kantarelou et al. 2007a, Kantarelou et al. 2007b.

[^2]: Degrigny et al. 2007.

[^3]: Arafat et al. 2013.

[^4]: Kantarelou et al. 2015.

[^5]: Heginbotham et al. 2010.

[^6]: Karydas et al. 2007, Potts and West 2008, Trentelman et al. 2010.

[^7]: Figueiredo et al. 2013, Ferretti 2014, Nicholas and Manti 2014.

[^8]: Ingo et al. 2004.

[^9]: Ingelbrecht et al. 2001.

[^10]: Robbiola et al. 1998.

[^11]: Kantarelou et al. 2007a, Gianoncelli and Kourousias 2007.

[^12]: Kantarelou et al. 2015.

[^13]: Manso et al. 2015.

[^14]: Kantarelou and Karydas 2016.

[^15]: Aruz, Benzel, and Evans 2008.

[^16]: Al Moadin and Diez-Fuentes 2006.

[^17]: Kantarelou et al. 2015.

[^18]: Karydas, Anglos, and Harith 2008.

[^19]: Kantarelou et al. 2015.
