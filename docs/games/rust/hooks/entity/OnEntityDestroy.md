---
hide_table_of_contents: true
---

# OnEntityDestroy

## Usage

* Called right before a CH47Helicopter or BradleyAPC is destroyed
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnEntityDestroy(BaseCombatEntity entity)
{
    Puts("OnEntityDestroy works!");
    return null;
}
```
