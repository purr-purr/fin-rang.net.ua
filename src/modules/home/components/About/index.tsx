import { FC, type ReactNode } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import SplitBlocks from '@modules/common/components/SplitBlocks';

import { COMPANY_ADDRESS, COMPANY_PHONE } from '@utils/const';

const About: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	return (
		<section id="about">
			<BlockTitle title="Про Товариство" />

			<SplitBlocks title={`Інформація ТОВ "ФК "ФІН-РАНГ"`} titleType="text">
				<p>
					<strong>Реквізити</strong>
				</p>
				<p>
					Повне найменування: ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ &quot;ФІНАНСОВА
					КОМПАНІЯ &quot;ФІН-РАНГ&quot;
				</p>
				<p> Скорочене найменування: ТОВ &quot;ФК &quot;ФІН-РАНГ&quot;</p>
				<p>Ідентифікаційний код: 42888239</p>
				<p>Місцезнаходження: {COMPANY_ADDRESS}</p>
				<p>Адреса для листування: {COMPANY_ADDRESS}</p>
				<p> Регіон: м. Київ</p>
				<br />
				<p>
					<strong>Дані про державну реєстрацію</strong>
				</p>
				Дата: 14.03.2019 Орган: Печерська районна в місті Києві державна
				адміністрація
				<br />
				<br />
				<p>
					<strong>Види діяльності</strong>
				</p>
				<ul>
					<li>
						Основний: 64.99 (Надання інших фінанс ових послуг (крім страхування та
						пенсійного забезпечення), н.в.і.у.)
					</li>
					<li> Додатковий: 64.19 (Інші види грошового посередництва)</li>
					<li>Додатковий: 64.92 (Інші види кредитування)</li>
				</ul>
				<br />
				<p>
					<strong>Контакти</strong>
				</p>
				<ul>
					<li>
						Електронна пошта:{' '}
						<a href="mailto:fk_fin-rang@ukr.net" target="_blank" rel="noreferrer">
							fk_fin-rang@ukr.net
						</a>
						,{' '}
						<a
							href="mailto:fkfinrang@emitents.net.ua"
							target="_blank"
							rel="noreferrer"
						>
							fkfinrang@emitents.net.ua
						</a>
					</li>
					<li>
						Телефон:{' '}
						<a href={`tel:${COMPANY_PHONE}`} target="_blank" rel="noreferrer">
							{COMPANY_PHONE}
						</a>
					</li>
				</ul>
				<br />
				<p>
					<strong>УВАГА!</strong> Станом на теперішній час, ТОВ «ФК «ФІН-РАНГ» не
					надає споживчі кредити у розумінні Закону України &quot;Про споживче
					кредитування&quot; та не здійснює врегулювання простроченої заборгованості
					фізичних осіб.
				</p>
			</SplitBlocks>

			{children}
		</section>
	);
};

export default About;
