(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[2339],{56276:(e,a,t)=>{"use strict";t.d(a,{Z:()=>u});var d=t(92950),n=t.n(d),i=t(45697),c=t.n(i),r=t(86896),o=t(62012),l=t(85991),b=t(49489),s=t(30893),f=function(e){var a=e.current,t=e.workloads,d=(0,r.Z)(),i=(0,o.useLocation)().pathname.split("/");return n().createElement("div",null,n().createElement(l.a,{ouiaId:"detail"},n().createElement(b.g,{className:"breadcrumb-item"},n().createElement(o.Link,{to:t?"../..":"..",relative:"path"},"".concat(d.formatMessage(s.Z.insightsHeader)," ").concat(i[4]))),n().createElement(b.g,{className:"breadcrumb-item",isActive:!0},a)))};f.propTypes={current:c().string,workloads:c().boolean};const u=f},52661:(e,a,t)=>{"use strict";t.d(a,{Z:()=>o});var d=t(92950),n=t.n(d),i=t(2095),c=t(85962),r=t(24561);const o=function(){return n().createElement(i.Card,{ouiaId:"loading-skeleton"},n().createElement(c.CardBody,null,n().createElement(r.aV,null)))}},37450:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>me});var d=t(4942),n=t(92950),i=t.n(n),c=t(89376),r=t(36001),o=t(42057),l=t(29572),b=t(34348),s=t(56276),f=t(49287),u=t(18038),m=t(81159),p=t(34023),k=t(35664),y=t(73845),P=t(62410),g=t(45697),h=t.n(g),E=function(e){var a,t=e.workloadData,d=e.namespaceId,n=e.clusterId,c=t.isUninitialized,r=t.isFetching,o=t.data;return i().createElement(f.r,{id:"workload-header",md:12,hasGutter:!0},i().createElement(u.P,{span:8},i().createElement(b.Dx,{size:"2xl",headingLevel:"h1",id:"cluster-header-title",ouiaId:"cluster-name"},c||r?i().createElement(i().Fragment,null,i().createElement(k.Z,{size:"sm"}),i().createElement(k.Z,{size:"sm"})):i().createElement(i().Fragment,null,i().createElement("p",null,o.cluster.display_name),i().createElement("p",null,o.namespace.name)))),i().createElement(u.P,null,i().createElement(m.K,null,i().createElement(p.v,{id:"workload-header-uuid"},i().createElement("span",null,"Cluster UUID:")," ",i().createElement("span",null,n)," ",i().createElement("span",null,"Namespace UUID:")," ",i().createElement("span",null,d)),i().createElement(p.v,{id:"workload-header-last-seen"},i().createElement("span",null,"Last seen: "),i().createElement("span",null,c||r?i().createElement(y.F,null):null!=o&&null!==(a=o.metadata)&&void 0!==a&&a.last_checked_at?i().createElement(P.Z,{date:o.metadata.last_checked_at,type:"exact"}):i().createElement(i().Fragment,null,"Unknown"))))))};E.propTypes={clusterId:h().string.isRequired,namespaceId:h().string.isRequired,workloadData:h().shape({isUninitialized:h().bool.isRequired,isFetching:h().bool.isRequired,data:h().shape({namespace:h().shape({uuid:h().string,name:h().string}),cluster:h().shape({uuid:h().string,display_name:h().string}),status:h().string})})};var v=t(62012);const D=JSON.parse('{"status":"ok","cluster":{"uuid":"00000001-0001-0001-0001-000000000005","display_name":"Cluster name 00000001-0001-0001-0001-000000000005"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":1,"objects":100,"reported_at":"2024-01-23T12:57:14+01:00","last_checked_at":"2024-01-23T12:57:14+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":2,"3":0,"4":1}},"recommendations":[{"check":"non_isolated_pod","details":"Alert on deployment-like objects that are not selected by any NetworkPolicy.","resolution":"Ensure pod does not accept unsafe traffic by isolating it with a NetworkPolicy. See https://cloud.redhat.com/blog/gUID:e-to-kubernetes-ingress-network-policies for more details.","modified":"2022-01-01T00:00:00Z","more_info":"There is no more info about this rule, sorry","total_risk":3,"extra_data":{"type":"rule","error_key":"BUGZILLA_BUG_1766907"},"objects":[{"kind":"Pod","uid":"44de671b-2bd1-4b1c-9be5-78609b9e74a6"},{"kind":"Pod","uid":"12fc9092-94c2-477f-b6ba-5e07304cd651"},{"kind":"Pod","uid":"bb78507b-cc1c-4c53-af2c-7807d9cbeab4"},{"kind":"Pod","uid":"25c22e8b-c490-43b4-a461-39c59367a979"},{"kind":"Pod","uid":"1e2da76c-a4bb-477a-9323-644f72c5d8c3"},{"kind":"Pod","uid":"f5d9a88d-d400-4edd-a91f-e63d0ea5ed95"},{"kind":"Pod","uid":"32acf562-b730-4c18-a9d6-24f6386820be"},{"kind":"Pod","uid":"91f6880b-19b8-4846-94e4-e9a9c2f04bc4"},{"kind":"Pod","uid":"cf2f1c43-5364-4ff5-bc1f-a73a7c120f55"},{"kind":"Pod","uid":"6b0e9021-9fc0-460f-bf02-6c6635501622"},{"kind":"Pod","uid":"5b5c1b58-dcde-43b5-9b40-a33fc274c60c"},{"kind":"Pod","uid":"0714a4c6-1c58-4af1-9ae7-deec6582913b"},{"kind":"Pod","uid":"eeae39fc-6eef-4ac7-a4ea-c35d2d024cc9"},{"kind":"Pod","uid":"11fb2240-b074-483f-97a9-26271dcd5f83"},{"kind":"Pod","uid":"446824b4-5c32-47d2-87eb-7cb2444df9d1"},{"kind":"Pod","uid":"b807887f-034f-49d9-9eee-072b7d713525"},{"kind":"Pod","uid":"617ccbcf-cdbf-4617-9675-00542ccd06e6"},{"kind":"Pod","uid":"ad162ea5-5361-4965-87ec-189b031d8634"},{"kind":"Pod","uid":"79402b0c-5dfc-45fe-895d-52940b7884b5"},{"kind":"Pod","uid":"952a89f6-6d65-486e-968c-868876dc6303"},{"kind":"Pod","uid":"657736a9-536b-4c83-9bbe-143023c00d76"},{"kind":"Pod","uid":"dc862c96-c593-4262-925d-7b7bbfd472a1"},{"kind":"Pod","uid":"daa8de2d-8e33-4787-9415-07a68393fead"},{"kind":"Pod","uid":"ffb33206-c1ff-4a54-b456-007a8f1fe3a6"},{"kind":"Pod","uid":"6b08978b-c5dd-475f-bda9-063dc44e3f59"},{"kind":"Pod","uid":"34a85912-2d77-46db-a796-70edb5c61209"},{"kind":"Pod","uid":"d500dcc0-4296-473f-a320-6e5734d967cb"},{"kind":"Pod","uid":"5a928576-4d3f-437c-a39d-f016efc05090"},{"kind":"Pod","uid":"90fa0c47-ef1e-46b4-9bb4-9b46c6d8dab2"},{"kind":"Pod","uid":"b938373d-4ac5-48bc-a7ee-519f7b727759"},{"kind":"Pod","uid":"9bb7d28b-8df4-422c-84b1-d3a56b592621"},{"kind":"Pod","uid":"0608bbb6-a207-4bb5-9dfe-9f34fa263e99"},{"kind":"Pod","uid":"1e6cb4f1-0f47-4ef7-8c59-cad9b922ea24"},{"kind":"Pod","uid":"dcd596bf-7750-4609-b8ff-9f7f4fff312f"},{"kind":"Pod","uid":"a03e37c8-3180-4992-820a-4c528d6b87d5"},{"kind":"Pod","uid":"43d9f5cb-050a-41a8-bd05-b969c2a61c38"},{"kind":"Pod","uid":"977ac771-2bdd-4e99-ad51-2dae89cc2ddb"},{"kind":"Pod","uid":"a06e4edb-a4eb-4b25-b610-9ced93f29083"},{"kind":"Pod","uid":"c6a3f0ec-5de4-4c0d-a646-d9fba27fa796"},{"kind":"Pod","uid":"36abbc02-c8e8-48e6-9572-d6bbf7d200a8"},{"kind":"Pod","uid":"56b9246d-4f99-4774-a0ef-9f808eff0396"},{"kind":"Pod","uid":"2e90ae88-371f-470f-a7f3-9562225cad43"},{"kind":"Pod","uid":"59459ae7-f2da-4f33-8a92-c5bb50cae277"},{"kind":"Pod","uid":"2998897e-6c48-4246-b1c5-4217af53d21f"},{"kind":"Pod","uid":"33d664c0-2c03-4250-a204-29a63850b33a"},{"kind":"Pod","uid":"c1abe8a1-3085-442f-a63e-2fb0833d2059"},{"kind":"Pod","uid":"628ba5bc-8ca7-4034-bfcd-ff9435a7e2c5"},{"kind":"Pod","uid":"799d3251-c296-4be5-add8-b1039db568af"},{"kind":"Pod","uid":"922baa11-0f25-4e0f-8930-d30317fc4d65"},{"kind":"Pod","uid":"99f0acd2-f8be-4431-b3e9-da06cb6259d8"},{"kind":"Pod","uid":"b30beda9-dcf5-4f7a-9524-75f3a4afbde3"},{"kind":"Pod","uid":"58879ff8-9bda-4da7-b981-ea37ecb1bd4d"},{"kind":"Pod","uid":"1f859379-1d87-4f78-aedc-e7d50732af0d"},{"kind":"Pod","uid":"949cff7f-e8dd-4db4-85db-51d5bd17c049"},{"kind":"Pod","uid":"6afc1239-ceff-478b-a82b-d39d886eaca0"},{"kind":"Pod","uid":"de25f4de-15f7-40cd-82d8-882cc7e233b9"},{"kind":"Pod","uid":"b97e3968-0367-40d2-a3d3-c607a818a352"},{"kind":"Pod","uid":"598b4c49-daaf-4113-87e9-65cf760983ec"},{"kind":"Pod","uid":"c4c87125-ada3-446c-873d-8896d9a7ef46"},{"kind":"Pod","uid":"6cc5f175-33e6-4060-a5bd-2162b7209b91"},{"kind":"Pod","uid":"186a602c-791a-4051-84ad-6736a9eaaa3c"},{"kind":"Pod","uid":"3e3c6797-d18f-4ed9-b67a-4603d2928255"},{"kind":"Pod","uid":"d54f4ec5-eaad-440d-879e-3c0655fed588"},{"kind":"Pod","uid":"35ed1f58-e6d7-40d9-987d-6c84a7581a69"},{"kind":"Pod","uid":"0f02a25a-fac8-4ab4-975c-7e533e855034"},{"kind":"Pod","uid":"86b99147-e7c5-4277-b2c3-c87901ba8a47"},{"kind":"Pod","uid":"5a893389-bc0c-438e-bb5a-d3caec53de9e"},{"kind":"Pod","uid":"fd23d42c-868b-479d-ae0d-6fa088480b6e"},{"kind":"Pod","uid":"37893bd7-c53b-4451-bf7a-0939d19cfac8"},{"kind":"Pod","uid":"43183885-2d33-40c8-8802-19d7d29f1243"},{"kind":"Pod","uid":"208094ff-43d4-4414-b281-796410026b1b"},{"kind":"Pod","uid":"97652545-0c8e-435e-ba5d-5f4bf429fccf"},{"kind":"Pod","uid":"842da744-d098-46ee-b987-a1426a1f1f18"},{"kind":"Pod","uid":"89f76357-9aed-41a6-83ce-aff8f1ee66c7"},{"kind":"Pod","uid":"0f41dec3-d67a-488d-9c04-bd281a6de7a2"},{"kind":"Pod","uid":"c7151c22-bde4-4cbc-9b4c-eb54ea1148ea"},{"kind":"Pod","uid":"bdcb4e5d-0117-4e7b-9c16-01aeb76a3a98"},{"kind":"Pod","uid":"cd8ba924-6c29-48f4-bad3-5eb74f418601"},{"kind":"Pod","uid":"205dc67f-2677-4f6f-ba13-a999a3783def"},{"kind":"Pod","uid":"7c829d86-9909-4a6b-8d74-b36d770c3f66"},{"kind":"Pod","uid":"b03e9d54-8e7d-4a05-b962-d6436144f57f"},{"kind":"Pod","uid":"52f098de-1eff-446a-bdc7-82bf03149a63"},{"kind":"Pod","uid":"2f54a392-194c-436a-a058-3e894f900fcd"},{"kind":"Pod","uid":"5ac81032-6956-404e-b19d-a91951c59666"},{"kind":"Pod","uid":"60242380-bab4-4522-8fe3-8a1a162f0e21"},{"kind":"Pod","uid":"6d0ebe0e-c445-4213-af39-9a72322bece8"},{"kind":"Pod","uid":"a612264d-aaad-48b8-b4ab-8aea79066a02"},{"kind":"Pod","uid":"30970e5b-ebe7-4ebc-ab71-466f8ef1aa17"},{"kind":"Pod","uid":"18bfe7ca-bbb2-4a28-97af-e417976cba0a"},{"kind":"Pod","uid":"403d9ca8-6e16-4aba-a370-807eb91a0370"},{"kind":"Pod","uid":"04afae40-6c7f-48b7-9ddb-61d2a5def1dd"},{"kind":"Pod","uid":"d240c728-ac82-47c8-b313-e958ca9e0f81"},{"kind":"Pod","uid":"24505e88-8e53-4c79-bbbf-52636176b6ea"},{"kind":"Pod","uid":"068fbb6f-cb48-4154-9a44-0ef530d179e9"},{"kind":"Pod","uid":"87d81375-2895-4e1b-be2e-8422825fd7b9"},{"kind":"Pod","uid":"0bfe4f46-b1eb-4113-937a-c0038365037d"},{"kind":"Pod","uid":"ad4b2b4a-732f-459c-87b5-dadbffc509c9"},{"kind":"Pod","uid":"f4c334e6-723e-41c6-a299-e8f2c9c88018"},{"kind":"Pod","uid":"4201b7d3-81b5-4f73-9067-be6a3f4bbc85"},{"kind":"Pod","uid":"3d749c42-2e19-45d6-b9bf-1656293774f5"}]},{"check":"non_isolated_pod","details":"Alert on deployment-like objects that are not selected by any NetworkPolicy.","resolution":"Ensure pod does not accept unsafe traffic by isolating it with a NetworkPolicy. See https://cloud.redhat.com/blog/gUID:e-to-kubernetes-ingress-network-policies for more details.","modified":"2022-01-01T00:00:00Z","more_info":"There is no more info about this rule, sorry","total_risk":1,"extra_data":{"type":"rule","error_key":"BUGZILLA_BUG_1766907"},"objects":[{"kind":"Deployment","uid":"6970f6a2-4edf-4451-97cb-8fcee528d6e6"},{"kind":"Deployment","uid":"9d6553b8-a616-4cba-888d-628f989a9c98"},{"kind":"Deployment","uid":"4381b689-02eb-465a-90cf-55b3e2305d8d"},{"kind":"Deployment","uid":"2f6a4200-d6cc-4227-9242-9581a753a228"}]},{"check":"run_as_non_root","details":"Indicates when containers are not set to runAsNonRoot.","resolution":"Set runAsUser to a non-zero number and runAsNonRoot to true in your pod or container securityContext. Refer to https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ for details.","modified":"1999-01-02T03:04:05Z","more_info":"no additional info provided for this rule","total_risk":2,"extra_data":{},"objects":[{"kind":"Deployment","uid":"6970f6a2-4edf-4451-97cb-8fcee528d6e6"},{"kind":"Deployment","uid":"9d6553b8-a616-4cba-888d-628f989a9c98"},{"kind":"Deployment","uid":"4381b689-02eb-465a-90cf-55b3e2305d8d"},{"kind":"Deployment","uid":"2f6a4200-d6cc-4227-9242-9581a753a228"}]},{"check":"unset_cpu_requirements","details":"Indicates when containers do not have CPU requests and limits set.","resolution":"Set CPU requests and limits for your container based on its requirements. Refer to https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits for details.","modified":"1999-01-02T03:04:05Z","more_info":"no additional info provided for this rule","total_risk":1,"extra_data":{"type":"rule","error_key":"BUGZILLA_BUG_1766907"},"objects":[{"kind":"Deployment","uid":"6970f6a2-4edf-4451-97cb-8fcee528d6e6"},{"kind":"Deployment","uid":"9d6553b8-a616-4cba-888d-628f989a9c98"},{"kind":"Deployment","uid":"4381b689-02eb-465a-90cf-55b3e2305d8d"},{"kind":"Deployment","uid":"2f6a4200-d6cc-4227-9242-9581a753a228"}]},{"check":"unset_memory_requirements","details":"Indicates when containers do not have memory requests and limits set.","resolution":"Set memory requests and limits for your container based on its requirements. Refer to https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits for details.","modified":"2023-01-01T00:00:00Z","more_info":"Don\'t panic","total_risk":2,"extra_data":{"nodes_with_different_version":[{"Node":"oc1","Kubelet Version":"v1.14.6+0a21dd3b3","role":"worker"},{"Node":"oc2","Kubelet Version":"v1.14.6+0a21dd3b3","role":"worker"},{"Node":"oc3","Kubelet Version":"v1.14.6+d39ad8449","role":"worker"}],"kcs_link":"https://access.redhat.com/solutions/4602641","type":"rule","error_key":"NODE_KUBELET_VERSION"},"objects":[{"kind":"Deployment","uid":"6970f6a2-4edf-4451-97cb-8fcee528d6e6"},{"kind":"Deployment","uid":"9d6553b8-a616-4cba-888d-628f989a9c98"},{"kind":"Deployment","uid":"4381b689-02eb-465a-90cf-55b3e2305d8d"},{"kind":"Deployment","uid":"2f6a4200-d6cc-4227-9242-9581a753a228"}]}]}'),O=JSON.parse('["00000001-0001-0001-0001-000000000006/fad82c1f-96db-430f-b3ec-503fb9eeb7bb","00000001-0001-0001-0001-000000000001/17a2e369-e96b-436e-924a-afa055280e44","00000001-0001-0001-0001-000000000001/76f364f4-4369-4a18-96c3-0aaf07aa16f1","00000001-0001-0001-0001-000000000001/70aba366-f6a4-4d6a-9109-57e1ab867b08","00000001-0001-0001-0001-000000000001/ea8bde67-d544-46aa-9f53-705060649e75","00000001-0001-0001-0001-000000000003/e4a6778e-f75c-477c-8370-234b398277ca","00000001-0001-0001-0001-000000000005/fad82c1f-96db-430f-b3ec-503fb9eeb7bb","00000001-0001-0001-0001-000000000002/d00b47da-fc6f-4c72-abc1-94f525441c75","00000001-0001-0001-0001-000000000001/0fab74ee-61ce-498d-bcd4-070ad950b0d7","00000001-0001-0001-0001-000000000001/4b2adb7d-490d-48ca-ba28-1c22c8924c29","00000001-0001-0001-0001-000000000001/7eb1d18b-701b-4f51-aea0-5f235daf1e07","00000001-0001-0001-0001-000000000001/8bd032ea-243c-43f8-b9f8-7bba1ab723ee","00000001-0001-0001-0001-000000000001/fbcbe2d3-e398-4b40-9d5e-4eb46fe8286f","00000001-0001-0001-0001-000000000001/e6ed9bb3-efc3-46a6-b3ae-3f1a6e59546c","00000001-0001-0001-0001-000000000001/4354a80c-a7a6-405b-bfa6-9666b24e3b48","00000001-0001-0001-0001-000000000001/3f32904e-037d-4449-b57c-32a7b0134aeb","00000001-0001-0001-0001-000000000001/a6c13355-60b6-42fb-9120-5819d9a0f5ad","00000001-0001-0001-0001-000000000002/e4a6778e-f75c-477c-8370-234b398277ca","00000001-0001-0001-0001-000000000002/e6ed9bb3-efc3-46a6-b3ae-3f1a6e59546c","00000001-0001-0001-0001-000000000002/3f32904e-037d-4449-b57c-32a7b0134aeb","00000001-0001-0001-0001-000000000002/fad82c1f-96db-430f-b3ec-503fb9eeb7bb","00000001-0001-0001-0001-000000000002/4354a80c-a7a6-405b-bfa6-9666b24e3b48","00000001-0001-0001-0001-000000000002/70aba366-f6a4-4d6a-9109-57e1ab867b08","00000001-0001-0001-0001-000000000002/4b2adb7d-490d-48ca-ba28-1c22c8924c29","00000001-0001-0001-0001-000000000002/8bd032ea-243c-43f8-b9f8-7bba1ab723ee","00000001-0001-0001-0001-000000000002/ea8bde67-d544-46aa-9f53-705060649e75","00000001-0001-0001-0001-000000000002/fbcbe2d3-e398-4b40-9d5e-4eb46fe8286f","00000001-0001-0001-0001-000000000002/7eb1d18b-701b-4f51-aea0-5f235daf1e07","00000001-0001-0001-0001-000000000002/17a2e369-e96b-436e-924a-afa055280e44","00000001-0001-0001-0001-000000000002/d00b47da-fc6f-4c72-abc1-94f525441c75","00000001-0001-0001-0001-000000000002/0fab74ee-61ce-498d-bcd4-070ad950b0d7","00000001-0001-0001-0001-000000000002/a6c13355-60b6-42fb-9120-5819d9a0f5ad","00000001-0001-0001-0001-000000000003/3f32904e-037d-4449-b57c-32a7b0134aeb","00000001-0001-0001-0001-000000000003/fad82c1f-96db-430f-b3ec-503fb9eeb7bb","00000001-0001-0001-0001-000000000003/8bd032ea-243c-43f8-b9f8-7bba1ab723ee","00000001-0001-0001-0001-000000000004/8bd032ea-243c-43f8-b9f8-7bba1ab723ee","00000001-0001-0001-0001-000000000004/fad82c1f-96db-430f-b3ec-503fb9eeb7bb","00000001-0001-0001-0001-000000000005/fad82c1f-96db-430f-b3ec-503fb9eeb7bb","00000001-0001-0001-0001-000000000002/e6ed9bb3-efc3-46a6-b3ae-3f1a6e59546c","00000001-0001-0001-0001-000000000002/3f32904e-037d-4449-b57c-32a7b0134aeb","00000001-0001-0001-0001-000000000002/fad82c1f-96db-430f-b3ec-503fb9eeb7bb","00000001-0001-0001-0001-000000000002/4354a80c-a7a6-405b-bfa6-9666b24e3b48","00000001-0001-0001-0001-000000000002/70aba366-f6a4-4d6a-9109-57e1ab867b08","00000001-0001-0001-0001-000000000002/4b2adb7d-490d-48ca-ba28-1c22c8924c29","00000001-0001-0001-0001-000000000002/8bd032ea-243c-43f8-b9f8-7bba1ab723ee","00000001-0001-0001-0001-000000000002/ea8bde67-d544-46aa-9f53-705060649e75","00000001-0001-0001-0001-000000000002/fbcbe2d3-e398-4b40-9d5e-4eb46fe8286f","00000001-0001-0001-0001-000000000002/7eb1d18b-701b-4f51-aea0-5f235daf1e07","00000001-0001-0001-0001-000000000002/17a2e369-e96b-436e-924a-afa055280e44","00000001-0001-0001-0001-000000000002/d00b47da-fc6f-4c72-abc1-94f525441c75","00000001-0001-0001-0001-000000000002/0fab74ee-61ce-498d-bcd4-070ad950b0d7","00000001-0001-0001-0001-000000000002/a6c13355-60b6-42fb-9120-5819d9a0f5ad","00000001-0001-0001-0001-000000000003/3f32904e-037d-4449-b57c-32a7b0134aeb","00000001-0001-0001-0001-000000000003/fad82c1f-96db-430f-b3ec-503fb9eeb7bb","00000001-0001-0001-0001-000000000003/8bd032ea-243c-43f8-b9f8-7bba1ab723ee","00000001-0001-0001-0001-000000000004/8bd032ea-243c-43f8-b9f8-7bba1ab723ee","00000001-0001-0001-0001-000000000004/fad82c1f-96db-430f-b3ec-503fb9eeb7bb","00000001-0001-0001-0001-000000000005/fad82c1f-96db-430f-b3ec-503fb9eeb7bb"]');function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);a&&(d=d.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,d)}return t}function _(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(Object(t),!0).forEach((function(a){(0,d.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}const j=function(){var e=(0,v.useParams)(),a=e.namespaceId,t=e.clusterId,d="".concat(t,"/").concat(a),n={isError:!1,isFetching:!0,isUninitialized:!0,isLoading:!0,isSuccess:!1,data:{},refetch:function(){return null}};if(O.includes(d)){var c=_(_({},D),{},{cluster:{display_name:"Cluster name ".concat(t),uuid:t},namespace:{name:"Namespace name ".concat(a),uuid:a}});n={isError:!1,isFetching:!1,isUninitialized:!1,isLoading:!1,isSuccess:!0,data:_({},c),refetch:function(){return null}}}else n={isError:!0,isFetching:!1,isUninitialized:!1,isLoading:!1,isSuccess:!1,data:{status:"error"},refetch:function(){return null}};return i().createElement(E,{workloadData:n,namespaceId:a,clusterId:t})};var w=t(70885),I=t(15509),C=t(56021),Z=t(59303),T=t(52661),N=t(51014),U=t(90693),x=t(1792),R=t(31369),L=t(61088),q=t(6202),B=t(2095),F=t(85962),A=t(21015),M=t(95061),z=t(84556),V=t(55471),G=t.n(V),H=t(78826),K=t(86706),W=t(28672),J=t(76913),Q=t(13877),Y=t(29299);function $(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);a&&(d=d.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,d)}return t}function X(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?$(Object(t),!0).forEach((function(a){(0,d.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var ee=function(e){var a,t=e.objects||[],c=(0,K.useDispatch)(),r=(0,n.useState)(!1),o=(0,w.Z)(r,2),l=o[0],b=o[1],s=(0,n.useState)([]),f=(0,w.Z)(s,2),u=f[0],m=f[1],p=(0,n.useState)([]),k=(0,w.Z)(p,2),y=k[0],P=k[1],g=(0,n.useState)(!1),h=(0,w.Z)(g,2),E=h[0],v=h[1],D=(0,K.useSelector)((function(e){return e.filters.workloadsObjectsListState})),O=Math.floor(D.offset/D.limit)+1,S=D.limit,_=function(e){return c((0,W.u2)(e))},j=y.length>0,U=!E,x=[{label:"Object ID",filterValues:{key:"object_id",onChange:function(e,a){return _(X(X({},D),{},{offset:0,object_id:a}))},value:D.object_id,placeholder:"Filter by Object ID"}}],R={showDeleteButton:l,deleteTitle:"Reset filters",filters:(a=X({},D),delete a.sortIndex,delete a.sortDirection,(0,Y.lM)(a,{label:"Object ID",type:"text",title:"object ID",urlParam:"object_id"})),onDelete:function(e,a,t){t?(0,W.aw)(D,W.kG,_):a.map((function(e){var a,t=(0,d.Z)({},e.urlParam,Array.isArray(D[e.urlParam])?D[e.urlParam].filter((function(a){return String(a)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?_(X(X({},D),t)):(a=e.urlParam,(0,J.oo)(D,_,a))}))}};(0,n.useEffect)((function(){m(function(e,a){return e.filter((function(e){return(0,Y.Q$)(e,a)}))}(t,D))}),[t,D]),(0,n.useEffect)((function(){P(u.slice(S*(O-1),S*(O-1)+S)),b((0,Y.wW)(D)),v(!0)}),[u,D.limit,D.offset]);var L=function(e,a){var t=a*D.limit-D.limit;_(X(X({},D),{},{offset:t}))},q=function(e,a){a!==D.limit&&_(X(X({},D),{},{limit:a,offset:0}))};return i().createElement("div",{id:"objects-list-table"},i().createElement(C.Z,{pagination:{page:O,perPage:S,onSetPage:L,onPerPageSelect:q,isCompact:!0,ouiaId:"pager",itemCount:u.length},filterConfig:{items:x},activeFiltersConfig:R}),U?i().createElement(T.Z,null):j?i().createElement("div",null,i().createElement(I.Table,{"aria-label":"Cell widths"},i().createElement(I.Thead,null,i().createElement(I.Tr,null,i().createElement(I.Th,{width:60},Z.VM.object),i().createElement(I.Th,{width:30},Z.VM.kind))),i().createElement(I.Tbody,null,null==y?void 0:y.map((function(e,a){return i().createElement(I.Tr,{key:a},i().createElement(I.Td,{dataLabel:Z.VM.object},e.uid),i().createElement(I.Td,{dataLabel:Z.VM.kind},e.kind))})))),y.length>0?i().createElement(Q.tl,{ouiaId:"pager",itemCount:u.length,page:O,perPage:S,onSetPage:L,onPerPageSelect:q,onPageInput:L,widgetId:"pagination-options-menu-bottom",variant:Q.aM.bottom}):i().createElement(Q.tl,{itemCount:0,perPage:!0,page:!0,onSetPage:!0,onPerPageSelect:!0,isDisabled:!0})):i().createElement(N.Ke,null))};ee.propTypes={objects:h().arrayOf(h().shape({kind:h().string,uid:h().string}))};const ae=JSON.parse('[{"kind":"DaemonSet","uid":"da5a07e1-3273-4056-8914-2732beb41b4c"},{"kind":"Deployment","uid":"foobar"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-f4-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"741069cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd7067b1"},{"kind":"Deployment","uid":"74106997ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-f067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-401e5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"},{"kind":"Deployment","uid":"74106997-d5b2-4fa9-875a-d1cb45d2ce68"},{"kind":"Deployment","uid":"8e0375c6-a290-4011-95be-46a3193f9ee5"},{"kind":"StatefulSet","uid":"975245fd-fec6-4a54-9fd4-2b6bcd7067b1"}]');var te=function(e){var a=e.isModalOpen,t=e.setIsModalOpen;return i().createElement(H.u_,{isOpen:a,onClose:function(){return t(!1)},variant:"medium",title:"Objects"},i().createElement(ee,{objects:ae}))};const de=te;te.propTypes={isModalOpen:h().bool,setIsModalOpen:h().func,objects:h().arrayOf(h().shape({kind:h().string,uid:h().string}))};var ne=function(e){var a=e.more_info,t=e.resolution,d=e.objects,c=(0,n.useState)(!1),r=(0,w.Z)(c,2),o=r[0],l=r[1];return i().createElement(B.Card,{className:"ins-c-report-details",style:{boxShadow:"none"}},i().createElement(F.CardBody,null,i().createElement(de,{isModalOpen:o,setIsModalOpen:l,objects:d}),i().createElement(m.K,{className:"ins-c-report-details__cards-stack","widget-type":"InsightsRulesCard",hasGutter:!0},i().createElement(p.v,null,i().createElement(B.Card,{isCompact:!0,isPlain:!0},i().createElement(A.CardHeader,null,i().createElement(x.ZP,{className:"ins-c-report-details__icon"}),i().createElement("strong",null,"Detected issues")),i().createElement(F.CardBody,null,"This should be a reason field and extradata should provide us an array of reasons to list here"))),i().createElement(z.Divider,null),i().createElement(p.v,null,i().createElement(B.Card,{isCompact:!0,isPlain:!0},i().createElement(A.CardHeader,null,i().createElement(L.ZP,{className:"ins-c-report-details__icon"}),i().createElement("strong",null,"Steps to resolve")),i().createElement(F.CardBody,null,i().createElement(G(),{template:t})))),i().createElement(I.Table,{borders:"compactBorderless","aria-label":"Objects table"},i().createElement(I.Thead,null,i().createElement(I.Tr,null,i().createElement(I.Th,{modifier:"fitContent"},Z.VM.object),i().createElement(I.Th,{modifier:"fitContent"},Z.VM.kind))),i().createElement(I.Tbody,null,d.slice(0,3).map((function(e,a){return i().createElement(I.Tr,{key:a},i().createElement(I.Td,{dataLabel:Z.VM.object},e.uid),i().createElement(I.Td,{dataLabel:Z.VM.kind},e.kind))})))),i().createElement(q.Button,{variant:"link",isInline:!0,onClick:function(){return l(!0)}},"View all objects"),i().createElement("br",null),i().createElement(A.CardHeader,null,i().createElement("strong",null,"Note:")),i().createElement(F.CardBody,null,"Red Hat avoids gathering and processing namespace and resource names as these may reveal confidential information. Namespaces and resources are identified by their UIDs instead. You can use in-cluster commands like the ones below to translate UIDs of affected resources to their names.",i().createElement(M.d,null,'oc get namespace -o jsonpath={range .items[*]}{.metadata.name}{"\t"}{.metadata.uid}{"\n"}{end}\n  oc -n <namespace> get <resourceKind> -o jsonpath={range .items[*]}{.metadata.name}{"\t"}{.metadata.uid}{"\n"}{end}')),i().createElement(i().Fragment,null,i().createElement(z.Divider,null),i().createElement(p.v,null,i().createElement(B.Card,{isCompact:!0,isPlain:!0},i().createElement(A.CardHeader,null,i().createElement(R.default,{className:"ins-c-report-details__icon"}),i().createElement("strong",null,"Additional info")),i().createElement(F.CardBody,null,a)))))))};const ie=ne;function ce(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);a&&(d=d.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,d)}return t}function re(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ce(Object(t),!0).forEach((function(a){(0,d.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}ne.propTypes={more_info:h().string.isRequired,resolution:h().string.isRequired,objects:h().arrayOf({kind:h().string,uid:h().string})};var oe=function(e){var a=e.workload,t=(0,K.useDispatch)(),c=a.isError,r=a.isUninitialized,o=a.isFetching,l=a.isSuccess,b=a.data,s=(null==b?void 0:b.recommendations)||[],f=c,u=l,m=u&&0===s.length,p=(0,n.useState)(!1),k=(0,w.Z)(p,2),y=k[0],g=k[1],h=(0,n.useState)([]),E=(0,w.Z)(h,2),D=E[0],O=E[1],S=(0,n.useState)(!0),_=(0,w.Z)(S,2),j=_[0],x=_[1],R=(0,n.useState)([]),L=(0,w.Z)(R,2),q=L[0],B=L[1],F=(0,n.useState)(!1),A=(0,w.Z)(F,2),M=A[0],z=A[1],V=(0,n.useState)(!1),G=(0,w.Z)(V,2),H=G[0],Q=G[1],$=(0,n.useState)(!0),X=(0,w.Z)($,2),ee=X[0],ae=X[1],te=r||o||!M,de=(0,v.useLocation)().search,ne=(0,K.useSelector)((function(e){return e.filters.workloadsRecsListState})),ce=0===D.length,oe=function(e){return t((0,W.cH)(e))};(0,n.useEffect)((function(){O(fe(s,ne))}),[b,ne]),(0,n.useEffect)((function(){B(se(D,ne.sortIndex,ne.sortDirection)),Q((0,Y.wW)(ne)),z(!0)}),[D]);var le=(0,Z.PL)(ne,(function(e,a){ae(!1),(0,Y.sI)(ne,oe,e,a)}));(0,n.useEffect)((function(){if(de&&j){var e=(0,J.yG)(de);if(e.sort){var a=(0,J.Lg)(e.sort);e.sortIndex=Z.Db.indexOf(a.description),e.sortDirection=a.direction}e.total_risk&&!Array.isArray(e.total_risk)&&(e.total_risk=["".concat(e.total_risk)]),oe(re(re({},ne),e))}x(!1)}),[]),(0,n.useEffect)((function(){j||(0,J.aM)(ne,Z.Db)}),[ne,j]);var be,se=function(e,a,t){var d=(0,Y.ke)(a,t,e);return(0,Y.l8)(d,ee)},fe=function(e,a){z(!1);var t=(0,Y.wW)(a);return e.filter((function(e){return!t||(0,J.y4)(e,a)})).map((function(e,a){return[{rule:e,isOpen:y,cells:[{title:e.details},{title:i().createElement("div",{key:a},i().createElement(U.Z,{value:e.total_risk,rest:{isCompact:!0}}))},{title:e.objects.length},{title:i().createElement("div",{key:a},i().createElement(P.Z,{date:e.modified,type:"relative"}))}]},{cells:[{title:i().createElement(ie,{extra_data:e.extra_data,more_info:e.more_info,resolution:e.resolution,objects:e.objects})}]}]}))},ue={showDeleteButton:H,deleteTitle:"Reset filters",filters:(be=re({},ne),delete be.sortIndex,delete be.sortDirection,(0,Y.lM)(be,Z.Oq)),onDelete:function(e,a,t){t?(0,W.aw)(ne,W.J2,oe):a.map((function(e){var a,t=(0,d.Z)({},e.urlParam,Array.isArray(ne[e.urlParam])?ne[e.urlParam].filter((function(a){return String(a)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?oe(re(re({},ne),t)):(a=e.urlParam,(0,Y.p5)(ne,oe,a))}))}};return i().createElement("div",{id:"workload-recs-list-table"},i().createElement(C.Z,{filterConfig:{items:le,isDisabled:te||f||m||0===s.length},pagination:i().createElement("span",{className:"pf-u-font-weight-bold"},1===(null==D?void 0:D.length)?"".concat(D.length," Recommendation"):"".concat(D.length," Recommendations")),activeFiltersConfig:te||f||m||0===s.length?void 0:ue}),i().createElement(I.Table,{"aria-label":"Workload recommendations table",ouiaId:"workload-recommendations",cells:Z.x2,ouiaSafe:!te,onCollapse:function(e,a,t){void 0===a?(g(t),B(q.map((function(e){return re(re({},e),Object.hasOwn(e,"parent")?null:{isOpen:t})})))):B(q.map((function(e,d){return d===a?re(re({},e),{},{isOpen:t}):e})))},rows:f||te||m||ce?[{fullWidth:!0,cells:[{props:{colSpan:Z.x2.length+1},title:f?i().createElement(N.fe,null):te?i().createElement(T.Z,null):ce?i().createElement(N.Be,null):i().createElement(N.So,null)}]}]:u?q:i().createElement(N.Te,null),variant:I.TableVariant.compact,isStickyHeader:!0,canCollapseAll:!0,sortBy:{index:ne.sortIndex,direction:ne.sortDirection},onSort:function(e,a,t){z(!1),ae(!1),oe(re(re({},ne),{},{sortIndex:a,sortDirection:t}))}},i().createElement(I.TableHeader,null),i().createElement(I.TableBody,null)))};const le=oe;oe.propTypes={workload:h().shape({isUninitialized:h().bool.isRequired,isFetching:h().bool.isRequired,isError:h().bool.isRequired,isSuccess:h().bool.isRequired,error:h().object,data:h().shape({namespace:h().shape({uuid:h().string,name:h().string}),cluster:h().shape({uuid:h().string,display_name:h().string}),status:h().string,recommendations:h().arrayOf(h().shape({check:h().string,description:h().string,objects:h().arrayOf(h().shape({kind:h().string,uid:h().string})),remediation:h().string}))})})};var be=function(e){var a,t=e.workload,d=e.namespaceId,n=e.clusterId;return i().createElement(i().Fragment,null,i().createElement(c.Z,{className:"pf-m-light ins-inventory-detail"},i().createElement(r.k,{direction:{default:"column"}},i().createElement(o.B,null,i().createElement(s.Z,{current:"ok"===(null==t||null===(a=t.data)||void 0===a?void 0:a.status)?"".concat(t.data.cluster.display_name," | ").concat(t.data.namespace.name):"".concat(n," | ").concat(d),workloads:"true"}),i().createElement(j,null)))),i().createElement(l.NP,null,i().createElement(b.Dx,{className:"pf-u-mb-lg",headingLevel:"h3",size:"2xl"},"Recommendations"),i().createElement(le,{workload:t})))};be.propTypes={clusterId:h().string.isRequired,namespaceId:h().string.isRequired,workload:h().shape({isUninitialized:h().bool.isRequired,isFetching:h().bool.isRequired,data:h().shape({namespace:h().shape({uuid:h().string,name:h().string}),cluster:h().shape({uuid:h().string,display_name:h().string}),status:h().string})})};var se=t(55140);function fe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);a&&(d=d.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,d)}return t}function ue(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?fe(Object(t),!0).forEach((function(a){(0,d.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}const me=function(){var e=(0,se.Z)(),a=(0,v.useParams)(),t=a.namespaceId,d=a.clusterId,c="".concat(d,"/").concat(t),r={isError:!1,isFetching:!0,isUninitialized:!0,isLoading:!0,isSuccess:!1,data:{},refetch:function(){return null}};if(O.includes(c)){var o=ue(ue({},D),{},{cluster:{display_name:"Cluster name ".concat(d),uuid:d},namespace:{name:"Namespace name ".concat(t),uuid:t}});r={isError:!1,isFetching:!1,isUninitialized:!1,isLoading:!1,isSuccess:!0,data:ue({},o),refetch:function(){return null}}}else r={isError:!0,isFetching:!1,isUninitialized:!1,isLoading:!1,isSuccess:!1,data:{status:"error"},refetch:function(){return null}};return(0,n.useEffect)((function(){r.refetch()}),[t,d]),(0,n.useEffect)((function(){var a,n,i,c,o,l,b="".concat("ok"===(null===(a=r)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.status)?"".concat(null===(i=r)||void 0===i||null===(c=i.data)||void 0===c?void 0:c.cluster.display_name," | ").concat(null===(o=r)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.namespace.name," - Workloads"):"".concat(d," | ").concat(t," - Workloads"));e.updateDocumentTitle("".concat(b," - OCP Advisor | Red Hat Insights"))}),[r,t,d]),i().createElement(be,{workload:r,namespaceId:t,clusterId:d})}},73845:(e,a,t)=>{"use strict";t.d(a,{F:()=>c});var d=t(92950),n=t.n(d),i=t(24561),c=function(){return n().createElement(i.ZP,{height:20},n().createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"300",height:"20"}))}},70347:()=>{},58392:()=>{},80598:()=>{},71644:()=>{},28992:()=>{},25238:()=>{},93398:()=>{},92084:()=>{},46928:()=>{},38299:()=>{},72816:()=>{},11177:()=>{},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Workload.dbb2e3643458a82511569eaf59315f02.js.map