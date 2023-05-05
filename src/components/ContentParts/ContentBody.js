import React from "react";

function Items({ text, description, description1 }) {
  return (
    <div className="rounded-lg bg-[#2B2D42] p-5">
      <div className="grid grid-cols-12 bg-[#2B2D42] p-4">
        <div className="col-span-10 self-center pl-2 lg:col-span-11">
          <div className="text-lg text-white">{text}</div>
          <div className="text-md text-white">{description}</div>
          <div className="text-md text-white">{description1}</div>
        </div>
      </div>
    </div>
  );
}

export default function ContentBody() {
  return (
    <div>
      <div className="bg-[#2B2D42]">
        <Items
          text="Food and Humanitarian Crises"
          description="Food and Humanitarian Crises: Science and Policies for Prevention and Mitigation"
          description1="Building on earlier food related PAS conferences: The Pontifical Academy of Sciences (PAS) has repeatedly addressed problems of the world food system in the past from various angles, and issued statements for action and research. Recently this included conferences on Science and Innovations for a Sustainable Food System - Preparing for the UN Food Systems Summit, 21-22 April 2021[1], and Reduction of Food Loss and Waste, 11-12 November 2019[2]. Moreover, PAS climate related conferences and biodiversity related conferences, as well as conferences addressing innovations in bio-sciences also included attention to food systems and food security.[3] The findings from these conferences and the related statements and publications form important backdrops to the concept of this workshop."
        />
        <Items
          text="Strategies"
          description="Strategies to decrease inequalities in cancer therapeutics/care and prevention"
          description1="Inequalities tend to be systemic and often entrenched in socio-economic and political structures within and across countries. In recent years, analyses of inequalities related to cancer therapeutics/care and prevention have shown important disparities between and within countries, including those with high economic standards. The conference will explore how to overcome disparities even in the present relatively unequal financial situation between countries."
        />
        <Items
          text="Care"
          description="Care for Our Common Home"
          description1="Both documents will enter into force for the Holy See, in the name and on behalf of the Vatican City State, on 4 October 2022, the Solemnity of St. Francis. This date also marks the first anniversary of the event on “Faith and Science: Towards COP26”, which was held in the Vatican on October 4, 2021, and was attended, together with Pope Francis, by numerous religious leaders and scientists. On that occasion, these representatives, from many faiths and spiritual traditions, as well as from many cultures and scientific fields, made their voices heard. Different voices, with different sensitivities. What could be clearly perceived was a strong convergence of all those present in committing themselves to the urgent need to change course, by moving with decision and conviction from the “throwaway culture”, prevalent in our society, to a “culture of care” for our common home, for those already living here and for those who will live here in the future."
        />
        <Items
          text="Final Statement"
          description="Final Statement of the Conference on “Strategies to decrease inequalities in cancer therapeutics/care and prevention”"
          description1="Cancer prevention and therapeutics/care show important disparities between and within countries. Health disparities need to be better understood because they tend to be associated with other economic trends (e.g., access to information that decreases risk factors and fosters behaviours to face risk awareness). Interactions among important policy actions, including the EU Mission on Cancer, Europe’s Beating Cancer Plan, the US Cancer Moonshot by the National Cancer Institute, and cancer-related programs in the Global South, need to be integrated and strengthened to implement comprehensive translational cancer research. The development of innovation ecosystems and policies integrating social needs require international support. Capacity building of national health systems and local research and industrial production capacity must be bolstered. International development funds should consider capacity building in cancer research and infrastructures with incentives for innovation and collaboration."
        />
        <Items
          text="Human Development"
          description="Basic science for human development, peace, and planetary health"
          description1="The 2022 Plenary of the Pontifical Academy of Sciences explored and highlighted the driving forces and opportunities related not just to basic science per se, but to basic science for human development, peace and planetary health. The topic is also timely in view of the United Nations’ “International Year of Basic Sciences for Sustainable Development”."
        />
      </div>
    </div>
  );
}
