import Agreement from "assets/img/workflow/Agreement.svg";
import CreationProcess from "assets/img/workflow/Creation-process.svg";
import WorkConfused from "assets/img/workflow/Work-confused.svg";
import TransactionalSMS from "assets/img/workflow/Transactional-SMS.svg";
import BusinessCalendarManagement from "assets/img/workflow/Business-calendar-management.svg";
import Blueprint from "assets/img/workflow/Blueprint.svg";
import HandCoding from "assets/img/workflow/Hand-coding.svg";
import DomainRegistration from "assets/img/workflow/Domain-registration.svg";
import InvestorPresentation from "assets/img/workflow/Investor-presentation.svg";

const data = [
  {
    title: "Обсуждение",
    description: (
      <>
        <p>
          Обсуждаем ваш проект. Устно или письменно. При необходимости используем <b>Teamviewer</b>, <b>RustDesk</b> или другую программу для демонстрации экрана. 
        </p>
        <p>
          Я делаю делаю для себя пометки, составляю план.
        </p>
      </>
    ),
    img: InvestorPresentation,
  },
  {
    title: "Техническое Задание",
    description: (
      <>
        <p>
          <b>Я</b> или <b>вы</b> или <b>мы вместе</b> составляем техническое задание. Таким образом, мы фиксируем то, что обсуждали и подтверждаем, что поняли друг друга правильно.
        </p>
      </>
    ),
    img: Blueprint,
  },
  {
    title: "Сроки и Стоимость",
    description: (
      <>
        <p>
          Я оцениваю сроки и стоимость работы.
        </p>
        <p>
          Если объем работы достаточно большой, то я разбиваю проект на промежуточные этапы - т.н. <b>Майлстоуны</b>. При этом у каждого этапа будет отедльная цена и срок выполнения.
        </p>
      </>
    ),
    img: BusinessCalendarManagement,
  },
  {
    title: "Договор (опционально)",
    description: (
      <>
        <p>При желании мы можем заключить договор, в котором будут четко прописаны условия нашего сотрудничества.</p>
      </>
    ),
    img: Agreement,
  },
  {
    title: ("Оплата"),
    description: (
      <>
        <p>Я работаю по предоплате и как самозанятый.</p>
        <p>Если проект небольшой, то вы оплачиваете сразу его полную стоимость.</p>
        <p>Если объем работы велик, то вы оплачивает лишь 1 майлстоун. По завершению текущего этапа, вы провеяете, соответствует ли результат вашим ожиданиям. Если все хорошо, то мы переходим к следующему этапу и так, пока не завершим проект.</p>
      </>
    ),
    img: TransactionalSMS,
  },
  {
    title: "Реализация",
    description: (
      <>
        <p>По мере выполнения проекта, я показываю вам промежуточные результаты согласно нашему плану, чтобы быть уверенным, что мы движемся в правильном направлении.</p>
        <p>Например, если я делаю веб-приложение, мы вероятно договоримся, что сначала я создаю дизайн-макет. Я демонстрирую макет и этот момент идеален для предложения правок. Делать правки на этапе прототиприрования гораздо эффективнее.</p>
      </>
    ),
    img: HandCoding,
  },
  {
    title: "Правки",
    description: (
      <>
        <p>К тому моменту, как проект почти готов, вы вероятно захотите что-то поменять.</p>
        <p>Если в проекте есть неточности, допущенные по моей навнимательности, я всегда исправляю их бесплатно.</p>
        <p>2-3 небольшие правки, дополнения я также могу сделать для вас бесплатно.</p>
        <p>Если вы понимаете, что нужны существенные дополнения/изменения, то стоимость и сроки работы мы обговариваем отдельно.</p>
      </>
    ),
    img: WorkConfused,
  },
  {
    title: "Размещение",
    description: (
      <>
        <p>Если все готово, мы размещаем ваш проект в интернете.</p>
        <p>Я подробно вам рассказываю о возможных вариантах:</p>
        <ul>
          <li>Хостинг</li>
          <li>VPS</li>
          <li>Выделенный сервер</li>
        </ul>
        <p>Рассказываю о плюсах и минусах, помогаю с выбором операционной системы и домена. Если вас все устраивает, то размещаю ваш сайт/приложение.</p>
      </>
    ),
    img: DomainRegistration,
  },
  {
    title: "Сопровождение",
    description: (
      <>
        <p>Последний этап - сопровождение. Часто бывает так, что с течением времени, появляется потребность в добавление нового функционала.</p>
        <p>Возможно вы захотите поменять логику уже имеющихся модулей.</p>
        <p>Мы можем договориться об условиях сопровождения вашего проекта.</p>
      </>
    ),
    img: CreationProcess,
  },
];

export default data;