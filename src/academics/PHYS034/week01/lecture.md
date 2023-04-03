---
lang: ko-KR 
title: Lecture
description: Lecture
---

# {{ $frontmatter.description }}

---

## NEWTON'S LAW

$$
\sum{\vec{F}}=m\vec{a};
$$

- **vector** statement
- **sum of force** statement
- does not make distinction between
  - **object at rest** and
  - **object moving at constant velocity**.

$$
\begin{matrix}V=0&\equiv&V=\text{const}\end{matrix}
$$

---

## FRAME OF REFERENCE

- inertial frame
- e.g. 

$$
S: xy\text{-frame}
$$

> **Q1**: In the classroom, fixed to the surface of the earth, are we on an inertial frame?
>> **A1**: No. Because the earth is spinning.

> **Q2**: Do we see something spinning, because the earth is spinning?
>> **A2**: No. (except [coriolis effect](https://en.m.wikipedia.org/wiki/Coriolis_effect))

### EXAMPLE: FRAME OF REFERENCE

IN GENERAL

$$
\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}
$$


$$
\begin{align*}
v'&=v-\mathbf{V},&&\begin{cases} v_1=v_1'+\mathbf{V}; \\
v_2=v_2'-\mathbf{V};\end{cases}
\end{align*}
$$

#### CONSERVATION OF MOMENTUM

$$
\begin{equation}
m_1v_1+m_2v_2&=(m_1+m_2)v_f;&&\langle v=v'+\mathbf{V} \rangle\\
m_1(v_1'+\mathbf{V})+m_2(v_2'+\mathbf{V})&=(m_1+m_2)(v_f'+\mathbf{V});\\
m_1v_1'+m_2v_2'+(m_1+m_2)\mathbf{V}&=(m_1+m_2)(v_f')+(m_1+m_2)\mathbf{V});\\
m_1v_1'+m_2v_2'&=(m_1+m_2)v_f'
\end{equation}
$$

$$\underset{\text{conservation of momentum}}{\therefore{S'}: m_1v_1'+m_2v_2'=(m_1+m_2)v_f'}$$

---

## GALILEAN TRANSFORMATION

DERIVATION

$$
\begin{equation}
v'&=v-\mathbf{V};\\
\frac{dx'}{dt'}&=\frac{dx}{dt}-\mathbf{V};&&\langle dt'=dt \rangle\\
dx'&=dx-\mathbf{V}dt;\\
x'&=x-\mathbf{V}dt;
\end{equation}
$$

GENERAL FORM (for Newtonian Relativity)

$$
\begin{cases}
x'=x-\mathbf{V}t;\\
y'=y;\\
z'=z;\\
t'=t;\\
\end{cases}
$$

## SPEED OF LIGHT

#### list of important equations

> [Gauss's Law](https://en.m.wikipedia.org/wiki/Gauss%27s_law)

$$
\begin{align*}
\oint{\vec{E}\cdot{d}\vec{S}}&=\frac{Q_{\text{enc}}}{\epsilon_0},&&\langle \underset{\text{permittivity of free space}}{\epsilon_0=\frac{10^{-9}}{36\pi}\approx8.85 \rangle0^{-12}}\rangle
\end{equation}
$$

- [Faraday's Law (of induction)](https://en.m.wikipedia.org/wiki/Faraday%27s_law_of_induction)

$$
    \begin{equation}
    \oint{\vec{E}\cdot{d}\vec{S}}&=-\frac{d\Phi_{B}}{dt},&&&&\langle \underset{\text{magnetic flux}}{\phi_B=\oint{\vec{B}\cdot{d}\vec{S}}} \rangle
    \end{equation}
$$
    - [Ampere's Law](https://en.m.wikipedia.org/wiki/Amp%C3%A8re%27s_circuital_law)
$$
    \begin{equation}
    \oint{\vec{B}\cdot{d}\vec{S}}&=\mu_0i_{\text{through}},&&\langle \begin{matrix}B:\text{magnetic flux density}\\ \underset{\text{permeability of free \rangle}{\mu_0=4\pi\times10^{-7}=12.6\times10^{-7}}\end{matrix}\right>
    \end{equation}
$$
    - [Maxwell's Equation](https://en.m.wikipedia.org/wiki/Maxwell%27s_equations)
$$
    \begin{equation}
    \oint{\vec{B}\cdot{d}\vec{S}}&=\mu_0\left[i_{\text{through}}+\epsilon_0\frac{d\Phi_E}{dt}\right],&\text{where}\\
    \end{equation}
$$
$$
    \rangle
    \begin{equation}
    \phi_E&=\oint{\vec{E}\cdot{d}\vec{S}}
    =\oint{E\:dA\:\cos{\theta}}\\&=E\:A=\left[\frac{q}{\epsilon_0A}\right]A
    \end{equation}
    \rangle
$$

- #### DERIVATION
$$
    \begin{equation}
    \oint{\vec{E}\cdot{d}\vec{S}}
    &=E(x+\Delta{x},t)h+0-E(x,t)h+0;&&\langle E(x+\Delta{x})=E(x)+\frac{dE}{dx}\Delta{x} \rangle\\
    &=\left[E(x)+\frac{dE}{dx}\Delta{x}\right]h-E(x,t)h;\\
    &=\underline{\frac{dE}{dx}\Delta{x}\:h;}
    \end{equation}
$$
$$
    \begin{equation}
    \oint{\vec{E}\cdot{d}\vec{S}}
    &=-\frac{d\Phi_B}{dt}=-\frac{d}{dt}\left(\oint{\vec{B}\cdot{d}\vec{A}}\right)=-\frac{d}{dt}\left(B\:A\:\cos{\theta}\right)\\
    &=-\frac{d}{dt}\left(B\:\Delta{x}\:h\right)=\underline{-\frac{dB}{dt}\Delta{x}\:h;}\\\\
    \end{equation}
$$
$$
    \begin{equation}
    \frac{dE}{dx}\Delta{x}\:h&=-\frac{dB}{dt}\Delta{x}\:h\\
    \therefore\frac{dE}{dx}&=-\frac{dB}{dt}
    \end{equation}
$$
$$  
    \begin{equation}
    \oint{\vec{B}\cdot{d}\vec{S}}&=-B(x+\Delta{x})h+0+B(x,t)h+0,&&\langle B(x+\Delta{x})=B(x)+\frac{dB}{dx}\Delta{x} \rangle\\
    &=-\left[B(x,t)+\frac{dB}{dx}\Delta{x}\right]h+B(x,t)h\\
    &=\underline{-\frac{dB}{dx}\Delta{x}\:h;}
    \end{equation}
$$
$$
    \begin{equation}
    \oint{\vec{B}\cdot{d}\vec{S}}&=\mu_0\left[i_{\text{through}}+\epsilon_0\frac{d\Phi_E}{dt}\right],&&\langle i_{\text{through}}=0 \rangle\\
    &=\epsilon_0\mu_0\frac{d\Phi_{E}}{dt}=\epsilon_0\mu_0\frac{d}{dt}\oint{\vec{E}\cdot{d}\vec{S}}\\&=\underline{\epsilon_0\mu_0\frac{dE}{dt}\Delta{x}\:h};\\\\
    \end{equation}
$$
$$
    \begin{equation}
    -\frac{dB}{dx}\Delta{x}\:h&=\epsilon_0\mu_0\frac{dE}{dt}\Delta{x}\:h\\
    \therefore-\frac{dB}{dx}&=\epsilon_0\mu_0\frac{dE}{dt}
    \end{equation}
$$
Use these two equations to come up with something new
$$
    \left\{
    \begin{equation}
    \frac{dE}{dx}&=-\frac{dB}{dt}\\\\
    -\frac{dB}{dx}&=\epsilon_0\mu_0\frac{dE}{dt}
    \end{equation}
    \right.
$$
$$
    \begin{equation}
    \left(\frac{d}{dx}\right)\frac{dE}{dx}&=-\left(\frac{d}{dx}\right)\frac{dB}{dt}\\
    \frac{d^2E}{dx^2}&=\frac{d}{dt}\left(-\frac{dB}{dx}\right),&&\langle -\frac{dB}{dx}=\epsilon_0\mu_0\frac{dE}{dt} \rangle\\
    &=\frac{d}{dt}\left(\epsilon_0\mu_0\frac{dE}{dt}\right)\\
    &=\epsilon_0\mu_0\frac{d^2E}{dt^2}
    \end{equation}
$$
**Reminder**: wave equation (PHYS032)
$$  
    \begin{equation}
    \frac{d^2y}{dx^2}&=\frac{1}{v^2}\frac{d^2y}{dt^2}\\
    \end{equation}
$$
So we use this relation to make sense of our derived equation
$$
    \left\{
    \begin{equation}
    \frac{d^2y}{dx^2}&=\left(\frac{1}{v^2}\right)\frac{d^2y}{dt^2}\\\\
    \frac{d^2E}{dx^2}&=\left(\epsilon_0\mu_0\right)\frac{d^2E}{dt^2}
    \end{equation}
    \right.
$$
#### SPEED OF THE WAVE (LIGHT)
$$
    \begin{equation}
    \frac{1}{v^2}&=\epsilon_0\mu_0;\\
    v&=\frac{1}{\sqrt{\epsilon_0\mu_0}}=\frac{1}{\sqrt{\left(\frac{10^{-9}}{36\pi}\right)\left(4\pi\times10^{7}\right)}}\\
    &=3.0\times10^{8}
    \end{equation}
$$
#### CONCLUSION
 - **Light** is no different from **EM wave** (i.e. microwave, radio wave, x-ray, etc.)

## LORENTZ TRANSFORMATION
from GALILEAN TRANSFORMATION
#### Gamma
$$
    x'=x-\mathbf{V}t;
$$
Lorentz Transformation says that, in special relativity,
$$
    x'=\gamma\left(x-\mathbf{V}t\right)
$$
- Einstein's Postulate says if we consider the distance to be
$$d=rt$$
$$
    \left\{\begin{equation}
    S'&:x'=ct';\\
    S&: x=ct;
    \end{equation}\right.
$$
back to our Lorentz Transformation
$$
    \begin{matrix}
    \underset{\text{Lorentz TF form}}{\underline{\begin{equation}
    x'&=\gamma\left(x-\mathbf{V}t\right)\\
    (ct')&=\gamma\left((ct)-\mathbf{V}t\right)\\
    ct'&=\gamma\left(c-\mathbf{V}\right)t
    \end{equation}}}&&
    \underset{\text{Inverse Lorentz TF form}}{\underline{\begin{equation}
    x&=\gamma\left(x'+\mathbf{V}t'\right)\\
    (ct)&=\gamma\left((ct')+\mathbf{V}t'\right)\\
    ct&=\gamma\left(c+\mathbf{V}\right)t'
    \end{equation}}}\end{matrix}
$$
Use this relation to derive Gamma
$$
    \begin{equation}
    1&=1;\\
    \left(\frac{ct'}{\gamma\left(c-\mathbf{V}\right)t}\right)&=\left(\frac{\gamma\left(c+\mathbf{V}\right)t'}{ct}\right);\\
    \frac{c}{\gamma\left(c-\mathbf{V}\right)}&=\frac{\gamma\left(c+\mathbf{V}\right)}{c}\\
    c^2&=(\gamma)^2(c-\mathbf{V})(c+\mathbf{V})\\
    &=\gamma^2\left(c^2-\mathbf{V}^2\right);\\\\
    \gamma^2&=\frac{c^2}{c^2-\mathbf{V}}=\frac{1}{\frac{c^2-\mathbf{V}}{c^2}}=\frac{1}{1-\frac{\mathbf{V}^2}{c^2}};\\
    \gamma&=\sqrt{\left(\frac{1}{1-\frac{\mathbf{V}^2}{c^2}}\right)}=\frac{1}{\sqrt{1-\left(\frac{\mathbf{V}}{c}\right)^2}}\\
    &=\frac{1}{\sqrt{1-\left(\beta\right)^2}},
    \end{equation}
$$
where
$$
    \begin{matrix}
    \begin{equation}
    \beta=\frac{\mathbf{V}}{c}
    \end{equation}&
    \begin{cases}
    \beta\to0&\mathbf{V}\ll{c}\\
    \beta\to1&\mathbf{V}\approx{c}
    \end{cases}
    \end{matrix}
$$

#### TIME FOR LORENTZ TRANSFORMATION

- An observer from frame $$S$$ can see the person's time in the other frame $$S'$$ is **dilated** when the frame $$S'$$ is moving at a speed **close to speed of light**. On that note, we need to know how to get the proper time, $$t'$$ measured by the observer from $$S$$ frame.

###### $$t$$ and $$t'$$
$$  
    \begin{equation}
    x&=\gamma(x'+\mathbf{V}t')\\
    &=\gamma\left(\left(x-\mathbf{V}t\right)+\mathbf{V}t'\right)\\
    &=\gamma^2x-\gamma^2\mathbf{V}t+\gamma\mathbf{V}t';\\
    \gamma\mathbf{V}t'&=x-\gamma^2x+\gamma^2\mathbf{V}t;\\
    t'&=\frac{x}{(\gamma\mathbf{V})}-\frac{\gamma^2x}{(\gamma\mathbf{V})}+\frac{\gamma^2\mathbf{V}t}{(\gamma\mathbf{V})}=\frac{x}{\gamma\mathbf{V}}-\frac{\gamma}{\mathbf{V}}x+\gamma{t}\\
    &=\frac{x}{\mathbf{V}}\left(\frac{1}{\gamma}-\gamma\right)+\gamma{t}=\frac{x}{\mathbf{V}}\left(\frac{1-\gamma^2}{\gamma}\right)+\gamma{t}\\
    &=\frac{x}{\mathbf{V}}\left(\frac{\gamma}{\gamma}\right)\left(\frac{1-\gamma^2}{\gamma}\right)+\gamma{t}\\
    &=\frac{x\gamma}{\mathbf{V}}\left(\frac{1-\gamma^2}{\gamma^2}\right)+\gamma{t},\\
    \end{equation}
$$
$$
    \left\{
    \begin{equation}
    \frac{1-\left(\gamma^2\right)}{\gamma^2}&=\frac{1}{\gamma^2}-1\\
    &=\left(\frac{c^2-\mathbf{V}^2}{c^2}\right)-\left(\frac{c^2}{c^2}\right)\\
    &=-\frac{\mathbf{V}^2}{c^2};
    \end{equation}\right\}
$$
$$
    \begin{equation}
    t'&=\frac{x\gamma}{\mathbf{V}}\left(-\frac{\mathbf{V}^2}{c^2}\right)+\gamma{t}\\
    &=\gamma\left[t-\frac{\mathbf{V}}{c^2}x\right];
    \end{equation}
$$
$$
    \begin{matrix}
    \underset{\text{Lorentz TF form}}{\underline{\begin{equation}
    t'&=\gamma\left[t-\frac{\mathbf{V}}{c^2}x\right]
    \end{equation}}}&&
    \underset{\text{Inverse Lorentz TF form}}{\underline{\begin{equation}
    t&=\gamma\left[t'+\frac{\mathbf{V}}{c^2}x'\right]
    \end{equation}}}\end{matrix}
$$
