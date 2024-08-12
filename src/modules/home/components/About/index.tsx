import { FC, type ReactNode } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import SplitBlocks from '@modules/common/components/SplitBlocks';

import { COMPANY_ADDRESS, COMPANY_PHONE } from '@utils/const';

const About: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	return (
		<section id="about">
			<SplitBlocks title={`Повідомлення`} titleType="text">
				<p>
					<strong>
						ТОВ «ФК «ФІН-РАНГ» надає один вид фінансової послуги, а саме надання
						коштів та банківських металів у кредит. Клієнтами можуть бути тільки
						юридичні особи та/або фізичні особи – підприємці;
					</strong>
				</p>
				<p>
					<strong>
						ТОВ «ФК «ФІН-РАНГ» не надає споживчі кредити та не здійснює споживче
						кредитування;
					</strong>
				</p>
				<p>
					<strong>
						ТОВ «ФК «ФІН-РАНГ» не здійснює врегулювання простроченої заборгованості
						споживачів.
					</strong>
				</p>
			</SplitBlocks>

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
				адміністрація. Номер запису: 10701020000081652
				<br />
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
					</li>
					<li>
						Телефон:{' '}
						<a href={`tel:${COMPANY_PHONE}`} target="_blank" rel="noreferrer">
							{COMPANY_PHONE}
						</a>
					</li>
				</ul>
			</SplitBlocks>

			{children}
		</section>
	);
};

export default About;
