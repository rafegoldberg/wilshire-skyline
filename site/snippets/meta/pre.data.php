<!-- @todo[make <metas> actually work; use seo/soc. templates] -->

<title><?= $site->title() ?>&nbsp;•&nbsp;<?= $page->title() ?></title>

<meta name="description" content="<?= $site->description()->html() ?>">
<meta name="keywords" content="<?= $site->keywords()->html() ?>">

<?
$meta = array(
	'txt' => $page->text()->excerpt(),
	'ttl' => $site->title()->html(),
	'prj' => $page->title()->html(),
	'url' => $page->url(),
	'img' => $site->thumb(),
	'twt' => $site->soc_twitter(),
	'fbk' => $site->soc_facebook(),
);
?>
<!--—————————————————————————————————————————————>
|——| METADATA
|-->
<meta name="txt_meta" content="<?=$meta['txt']?>">
<meta name="ttl_meta" content="<?=$meta['ttl']?>">
<meta name="prj_meta" content="<?=$meta['prj']?>">
<meta name="img_meta" content="<?=$meta['img']?>">
<meta name="img_meta" content="<?=$meta['url']?>">
<meta name="twt_meta" content="<?=$meta['twt']?>">
<meta name="fbk_meta" content="<?=$meta['fbk']?>">
<!--———————————————————————————————————————————-->