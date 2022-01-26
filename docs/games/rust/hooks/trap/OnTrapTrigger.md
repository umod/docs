---
hide_table_of_contents: true
---

# OnTrapTrigger

## Usage

* Called when a trap is triggered by a game object
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnTrapTrigger(BaseTrap trap, GameObject go)
{
    Puts("OnTrapTrigger works!");
    return null;
}
```
