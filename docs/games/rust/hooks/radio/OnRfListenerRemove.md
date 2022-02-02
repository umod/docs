---
hide_table_of_contents: true
---

# OnRfListenerRemove

## Usage

* Called right before an object stops listening to an RF frequency
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnRfListenerRemove(IRFObject obj, int frequency)
{
    Puts("OnRfListenerRemove works!");
    return null;
}
```
