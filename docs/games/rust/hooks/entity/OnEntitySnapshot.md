---
hide_table_of_contents: true
---

# OnEntitySnapshot

## Usage

* Called when an entity snapshot is about to be sent to a client connection
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnEntitySnapshot(BaseNetworkable entity, Network.Connection connection)
{
    Puts("OnEntitySnapshot works!");
    return null;
}
```
