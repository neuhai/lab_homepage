---
layout: page
title: Human-AI Collaboration in Complex Medical Decision Making
description: 
img: assets/img/sepsis/paradigm.png
importance: 1
category: In progress
project_frontpage: true
short_intro: We argue that a human-centered AI system needs to support human experts in the intermediate stages of a medical decision-making process (e.g., generating hypotheses or gathering data), instead of focusing only on the final decision.

---
<h1>Human-AI Collaboration in Complex Medical Decision Making</h1>


Today's AI systems for medical decision support often succeed on benchmark datasets in research papers but fail in real-world deployment. 
Our aim is to explore the design requirements for AI systems that can support clinical experts in making better decisions for the early diagnosis of sepsis, which is an acute life-threatening systematic infection that requires an early diagnosis with high uncertainty from the clinician.
We study why clinical experts abandon an existing AI-powered Sepsis predictive module in their electrical health record (EHR) system. 
We argue that a human-centered AI system needs to support human experts in the intermediate stages of a medical decision-making process (e.g., generating hypotheses or gathering data), instead of focusing only on the final decision.
Therefore, we build \system based on a state-of-the-art AI algorithm and extend it to predict the future projection of sepsis development, visualize the prediction uncertainty, and propose actionable suggestions (i.e., which additional laboratory tests can be collected) to reduce such uncertainty.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/sepsis/paradigm.png" title="Paradigm" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     Our work focuses on sepsis diagnosis, a high-uncertainty, high-stakes, time-sensitive medical decision-making process. Physicians usually take four steps: (1) generating hypotheses, (2) gathering data, (3) testing hypotheses, and (4) making final decisions. Our study results point out that existing sepsis module is not helpful, forming a human-AI competition paradigm. We propose a new module to establish a human-AI collaboration paradigm.
</div>