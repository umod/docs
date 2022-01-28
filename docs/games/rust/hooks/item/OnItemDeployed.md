---
hide_table_of_contents: true
---

# OnItemDeployed

## Usage

* Called right after an item has been deployed
* No return behavior

## Examples

```csharp title=""
void OnItemDeployed(Deployer deployer, BaseEntity entity, BaseEntity slotEntity)
{
    Puts("OnItemDeployed works!");
}
```
