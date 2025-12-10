-- Básico
-- Básico v0001 Total de pessoas

-- Crianças, adolescentes e idosos
-- v01031  0 a 4 anos
-- v01032  5 a 9 anos
-- v01033  10 a 14 anos
-- v01034  15 a 19 anos
-- v01035  20 a 24 anos
-- v01036  25 a 29 anos
-- v01037  30 a 39 anos
-- v01038  40 a 49 anos
-- v01039  50 a 59 anos
-- v01040  60 a 69 anos
-- v01041  70 anos ou mais

-- Renda:
-- v06004 Valor do rendimento nominal médio mensal das pessoas responsáveis com rendimentos por domicílios particulares permanentes ocupados

SELECT
  bas.cd_mun,
  bas.nm_mun,

  -- Crianças
  util.safe_sum(v01031, v01032) AS qtd_criancas,
  (util.safe_sum(v01031, v01032) / bas.v0001) AS qtd_criancas_pct,

  -- Adolescentes
  util.safe_sum(v01033, v01034) AS qtd_adolescentes,
  (util.safe_sum(v01033, v01034) / bas.v0001) AS qtd_adolescentes_pct,

  -- Pessoas idosas
  util.safe_sum(v01040, v01041) AS qtd_idosos,
  (util.safe_sum(v01040, v01041) / bas.v0001) AS qtd_idosos_pct,

  -- Renda
  ren.v06004 AS renda_media_responsavel
FROM
  ibge.censo_2022_basico_agg_cd_mun AS bas
  JOIN ibge.censo_2022_demografia_agg_cd_mun AS dem USING (cd_mun)
  JOIN ibge.censo_2022_renda_responsavel_agg_cd_mun AS ren USING (cd_mun)
WHERE bas.cd_uf = '29';
