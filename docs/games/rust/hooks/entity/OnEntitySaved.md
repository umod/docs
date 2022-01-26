---
hide_table_of_contents: true
---

# OnEntitySaved

## Usage

* Called after a BaseNetworkable has been saved to a ProtoBuf object and is about to be serialized to a network stream or network cache
* No Return behavior

## Examples

```csharp title=""
void OnEntitySaved(BaseNetworkable entity, BaseNetworkable.SaveInfo saveInfo)
{
    Puts("OnEntitySaved works!");
}
```
