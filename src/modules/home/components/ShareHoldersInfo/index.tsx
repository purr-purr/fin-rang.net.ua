import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	auditReports,
	companyShareInfo,
	infoOwnershipStructure,
	news,
	reports,
} from '@modules/home/components/ShareHoldersInfo/data';

const ShareHoldersInfo = () => {
	return (
		<SplitBlocks
			title="Для акціонерів і стейкхолдерів"
			titleType="heading"
			anchor="share-holders-info"
		>
			<Accordion title="Звітність">
				<DocumentsList groupList={reports}/>
			</Accordion>

			<Accordion title="Інформація про структуру власності">
				<DocumentsList groupList={infoOwnershipStructure}/>
			</Accordion>

			<Accordion title="Новини">
				<DocumentsList list={news}/>
			</Accordion>

			<Accordion title="Розкриття інформації про ТОВ ФК «ФІН-РАНГ»">
				<DocumentsList list={companyShareInfo}/>
			</Accordion>

			<Accordion title="Аудиторські звіти">
				<DocumentsList groupList={auditReports}/>
			</Accordion>
		</SplitBlocks>
	);
};

export default ShareHoldersInfo;
