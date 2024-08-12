import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	archiveDocs,
	finReports,
	infoFinService,
	infoOwnershipStructure,
	news,
	publicInfo,
} from '@modules/home/components/ShareHoldersInfo/data';

const ShareHoldersInfo = () => {
	return (
		<SplitBlocks
			title="Документи ТОВ «ФК «ФІН-РАНГ»"
			titleType="heading"
			anchor="share-holders-info"
		>
			<Accordion title="Публічна та інша інформація">
				<DocumentsList list={publicInfo} />
			</Accordion>

			<Accordion title="Інформація про фінансову послугу">
				<DocumentsList list={infoFinService} />
			</Accordion>

			<Accordion title="Інформація про структуру власності">
				<DocumentsList groupList={infoOwnershipStructure} />
			</Accordion>

			<Accordion title="Повідомлення / Оголошення">
				<DocumentsList list={news} />
			</Accordion>

			<Accordion title="Фінансова звітність та аудиторські звіти">
				<DocumentsList groupList={finReports} />
			</Accordion>

			<Accordion title="Архівні документи">
				<DocumentsList list={archiveDocs} />
			</Accordion>
		</SplitBlocks>
	);
};

export default ShareHoldersInfo;
