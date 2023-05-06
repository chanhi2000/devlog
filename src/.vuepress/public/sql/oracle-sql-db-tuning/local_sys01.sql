-- 시스템(dba) 내에 속해 있는 모든 관련 유저 정보를 출력한다.
select * from dba_users;

-- 유저 `hr` 활성화 && 비밀번호 변경
alter user hr account unlock;
alter user hr identified by hr
alter user scott identified by scott
;
--- `hr`유저에게 dba 권한 부여
grant dba to hr;

-- dictionary에 저장된 캐시 블락 사이즈 (db_block_size) 조회
select *
 from  v$parameter
 where name like '%block%';
