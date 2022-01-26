---
hide_table_of_contents: true
---

# OnEntitySnapshot

## Usage

* Called when an entity snapshot is about to be sent to a client connection
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnEntitySnapshot(BaseNetworkable entity, Connection connection)
{
    Puts("OnEntitySnapshot works!");
    return null;
}
```
